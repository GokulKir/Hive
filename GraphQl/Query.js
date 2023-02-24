
export const  SELLERS_LIST = `
query FreelancerList($category: String, $allUsers: Boolean) {
  freelancerList(category: $category, allUsers: $allUsers) {
    msg
    freelancers {
      _id
      username
      profileImg
      hourlyRate
      rating
      isActivated
    }
  }
}
`
export const  SERVICE_LIST = `
query ServiceList($category: String) {
  serviceList(category: $category) {
    msg
    success
    services {
      _id
      images
      rating
      price
      slug
      title
      owner {
        description
      }
    }
  }
}
`
export const  CATEGORY_LIST = `
query CategoryFlatList($limit: Int) {
  categoryList(limit: $limit) {
    success
    msg
    totalPages
    totalCount
    categories {
      name
      icon
    }
  }
}
`
export const  FREELANCER_DETAILS = `
query GetFreelancerDetails($getFreelancerDetailsId: ID) {
  getFreelancerDetails(id: $getFreelancerDetailsId) {
    success
    msg
    userDetails {
      _id
      stage
      firstName
      lastName
      profileImg
      gender
      country
      email
      username
      city
      mobile
      isActivated
      rating
      description
      hourlyRate
      position
      languages {
        _id
        title
        slug
        isDeleted
      }
      totalHours
      totalJobs
      joined
      bankDetails {
        accountNo
        IFSC
        verified
        institution
      }
      education {
        institution
        description
        startYear
        endYear
        major
      }
      jobSuccess
    }
  }
}
`