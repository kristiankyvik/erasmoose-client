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

  getFilterResults : (filterObject, searchKey) => {
    let filterArray = [
      {
        name: {
          '$regex': searchKey,
          '$options': 'i'
        }
      }
    ];

    if (filterObject.length > 0) {
      let countryFilter = {
        country: {
          $or: []
        }
      }
      filterObject.forEach((country) => {
        countryFilter.country.$or.add(country);
      });
      filterArray.add(countryFilter);
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