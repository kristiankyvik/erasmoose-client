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

    for (let key in filterObject) {
      if (filterObject.hasOwnProperty(key) && filterObject[key].length) {
        let dropdown = key;
        let selectedItems = filterObject[dropdown];
        if (["language", "country", "area"].indexOf(dropdown) > -1) {
          let dropdownFilter = {
             $or: []
           }
          let toInsert = {};
          if (dropdown === "country") {
            toInsert[nameToField[dropdown]] = selectedItems;
          } else {
            toInsert[`${nameToField[dropdown]}.name`] = selectedItems;
          }
          dropdownFilter.$or.push(toInsert);
          filterArray.push(dropdownFilter);
        }
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