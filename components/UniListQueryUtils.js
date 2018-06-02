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

  

  rankingUniDictionary : {
    "$int_orientation.value" : "International orientation",
    "$difficulty.value" : "Difficulty",
    "$opportunities.value" : "Job opportunities",
    "$openness.value" : "Student openness",
    "$clubs.value" : "Student clubs",
    "$party.value": "Student parties",
  },

  rankingCityDictionary: {
    "$city.travel_options.value" : "Travel Opportunities",
    "$city.culture.value" : "Culture",
    "$city.student_friendliness.value" : "Student friendliness",
    "$city.sports.value" : "Sports",
    "$city.nightlife.value" : "Nightlife",
    "$city.gastronomy.value" : "Gastronomy"

  },

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

    for (let dropdownName in filterObject) {
      const selectedItems = filterObject[dropdownName];
      const dropdownField = nameToField[dropdownName];
      const isDropdownArrayEmpty = !(filterObject.hasOwnProperty(dropdownName) && selectedItems.length);
      const isDropDownWrong = ["language", "country", "area"].indexOf(dropdownName) === -1;

      if (isDropdownArrayEmpty || isDropDownWrong){
        break; 
      }
      
      let dropdownFilter = {
          $or: []
        }

      selectedItems.forEach((selectedItem) => {
        let toInsert = {};
        if (dropdownName === "country") {
          toInsert[dropdownField] = selectedItem;
        } else {
          toInsert[`${dropdownField}.name`] = selectedItem;
        }
        dropdownFilter.$or.push(toInsert);
      });

      filterArray.push(dropdownFilter);
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