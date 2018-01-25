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

  // workload: AverageProperty
  // fees: AverageProperty
  // main_disciplines: [Property]
  // languages: [Property]
  // difficulty: AverageProperty
  // weekly_hours: AverageProperty

  defaultRankingUni : [
    "$int_orientation.value",
    "$difficulty.value",
    "$opportunities.value",
    "$openness.value",
    "$clubs.value",
    "$party.value",
    "$openness.value",
    "$female_percentage.value",
    "$uni_recommendation.value",
    "$uni_recommendation.value",
    "$uni_recommendation.value",
    "$uni_recommendation.value"
  ],


  // rent_cost: AverageProperty
  // beer_cost: AverageProperty
  // coffee_cost: AverageProperty
  // kebab_cost: AverageProperty
  // danceclub_cost: AverageProperty

  // monthly_cost: AverageProperty
  
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
    console.log("FilterObject", filterObject);

    let filterArray = [
      {
        name: {
          '$regex': searchKey,
          '$options': 'i'
        }
      }
    ];


    for (let key in filterObject) {
      if (filterObject.hasOwnProperty(key)) {
        let dropdown = key;
        let selectedItems = filterObject[dropdown];
        if (selectedItems.length > 0) {
           let dropdownFilter = {
             $or: []
           }
           selectedItems.forEach((country) => {
             dropdownFilter.$or.push({country: country});
           });
           filterArray.push(dropdownFilter);
         }
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