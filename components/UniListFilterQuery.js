const nameToField = {
  area: "main_disciplines",
  language: "languages",
  country: "country"
};

module.exports = {
  joinUniCity : [
    {
      $lookup:
        {
          from: "cities",
          localField: "city_id",
          foreignField: "_id",
          as: "city"
        }
    },
    {
      $unwind: "$city"
    }
  ],

  defaultRankingUni : [
    "$int_orientation.value",
    "$difficulty.value",
    "$opportunities.value",
    "$openness.value",
    "$clubs.value",
    "$party.value",
    "$uni_recommendation.value",
    "$uni_recommendation.value",
    "$uni_recommendation.value",
    "$uni_recommendation.value"
  ],
  
  defaultRankingCity : [
    "$city.travel_options.value",
    "$city.culture.value",
    "$city.student_friendliness.value",
    "$city.sports.value",
    "$city.nightlife.value",
    "$city.gastronomy.value",
    "$city.city_recommendation.value",
    "$city.city_recommendation.value",
    "$city.city_recommendation.value",
    "$city.city_recommendation.value"
  ],

  getFilterResults: (filterObject, searchKey) => {
    let filterArray = [
      {
        name: {
          '$regex': searchKey,
          '$options': 'i'
        }
      }
    ];

    for (let dropdown in filterObject) {
      const selectedItems = filterObject[dropdown];
      const dropdownName = nameToField[dropdown];
      const isDropdownArrayEmpty = !(filterObject.hasOwnProperty(dropdown) && selectedItems.length);
      const isDropDownWrong = ["language", "country", "area"].indexOf(dropdown) === -1;

      if (isDropdownArrayEmpty || isDropDownWrong){
        break; 
      }
      
      let dropdownFilter = {
          $or: []
        }

      selectedItems.forEach((selectedItem) => {
        let toInsert = {};
        if (dropdown === "country") {
          toInsert[dropdownName] = selectedItem;
        } else {
          toInsert[`${dropdownName}.name`] = selectedItem;
        }
        dropdownFilter.$or.push(toInsert);
      });

      filterArray.push(dropdownFilter);
  
      // OTHER TAGS?
      // if (selectedItems.length > 0) {
      //    let dropdownFilter = {
      //      $or: []
      //    }
      //    selectedItems.forEach((item) => {
      //       let toInsert = {};
      //       if (dropdown === "countries") {
      //         toInsert["country"] = item;
      //       } else {
      //         toInsert[`${dropdown}.name`] = { $in: selectedItems};
      //       }
      //       dropdownFilter.$or.push(toInsert);
      //    });
      //    filterArray.push(dropdownFilter);
      //  }
    }

    return {
      $match: {
        $and: filterArray
      }
    };
  },
      
  getRankingUniCity : (rankingUni, rankingCity) => (
    [
      {
        $addFields: {
          uniRating: {
            $avg: rankingUni
          },
          cityRating: {
            $cond: {
              if: {
                $eq: ["$review_count", 0]
              },
              then: null,
              else: {
                $avg: rankingCity
              }
            }
          }
        }
      },
      {
        $addFields: {
          overallRating: {
            $avg: [
              "$cityRating",
              "$uniRating"
            ]
          }
        }
      },
      {
        $sort: { "overallRating": -1 }
      }
    ]
  )
}