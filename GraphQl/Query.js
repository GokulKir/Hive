
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