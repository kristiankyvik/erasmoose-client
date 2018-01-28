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
  
  rankingUniOptions: {
    int_orientation: {
      off: 1,
      on: 4
    },
    opportunities: {
      off: 1,
      on: 4
    },
    openness: {
      off: 1,
      on: 4
    },
    clubs: {
      off: 1,
      on: 4
    },
    party: {
      off: 1,
      on: 4
    },
    openness: {
      off: 1,
      on: 4
    },
    uni_recommendation: {
      off: 4,
      on: 4
    },
    easiness: {
      off: 1,
      on: 4
    },
    cheapness: {
      off: 1,
      on: 4
    },
    free_time: {
      off: 1,
      on: 4
    },
    uni_cheapness: {
      off: 1,
      on: 4
    }
  },

  rankingCityOptions: {
    travel_options: {
      off: 1,
      on: 4
    },
    culture: {
      off: 1,
      on: 4
    },
    student_friendliness: {
      off: 1,
      on: 4
    },
    sports: {
      off: 1,
      on: 4
    },
    nightlife: {
      off: 1,
      on: 4
    },
    gastronomy: {
      off: 1,
      on: 4
    },
    city_recommendation: {
      off: 4,
      on: 4
    },
    city_cheapness: {
      off: 1,
      on: 4
    }
  },

  createListOfWeights: (filterObject, options) => {
    const listOfWeights = [];
    for (var attribute in filterObject) {
      if (filterObject.hasOwnProperty(attribute) && options.hasOwnProperty(attribute)) {
        let active = filterObject[attribute];
        for (var i = 0; i < options[attribute][active ? "off" : "on"]; i++) listOfWeights.push(`$${attribute}.value`);
      }
    }
    return listOfWeights;
  }, 

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
      
  // Defining new fields:
  // workload: AverageProperty
  // fees: AverageProperty
  // main_disciplines: [Property]
  // languages: [Property]
  // difficulty: AverageProperty
  // weekly_hours: AverageProperty
  // const fieldProjections = [

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
          },
          easiness: { $subtract: [ 5, "$difficulty.value"] },
          uni_cheapness: { $subtract: [ 5000, "$fees.value"] },
          free_time: { $subtract: [ 60, "$weekly_hours.value"] },
          city_cheapness: { $subtract: [ 2000, "$monthly_cost.value"] }
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