
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
export const  CATEGORY_LIST_ALL = `
query CategoryFlatList() {
  categoryList() {
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
export const  PROFILE_DETAILS = `
query GetServiceDetails {
  getProfileDetails {
    success
    msg
    userDetails {
      _id
      firstName
      lastName
      username
      email
      country
      gender
      city
      mobile
      description
      tagline
      englishLevel
      hourlyRate
      languages {
        _id
        title
      }
      position
      education {
        _id
        institution
        description
        major
        startYear
        endYear
      }
    }
  }
}
`
export const  LANGUAGES = `
query GetFreelancerDetails {
  listLanguages {
    success
    msg
    languages {
      _id
      title
    }
  }
}
`
export const  SKILLS = `
query GetFreelancerDetails {
  skillList {
    success
    msg
    skills {
      _id
      title
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
      awards {
        title
        startYear
        endYear
        description
        issuer
      }
      experience {
        company
        role
        startYear
        endYear
        description
      }
    }
    featuredServices {
      _id
      title
      rating
      price
      images
      slug
      status
    }
  }
}
`
export const  SERVICE_DETAILS = `
query GetServiceDetails($serviceId: String) {
  getServiceDetails(serviceId: $serviceId) {
    success
    msg
    details {
      title
      shortDescription
      images
      price
      rating
      slug
      owner {
        name
        _id
        rating
        profileImg
        isActivated
        firstName
        lastName
      }
      serviceDetails
      reviews {
        reviewer {
          _id
          username
          profileImg
        }
        reviewee {
          _id
          username
          profileImg
        }
        rating
        createdAt
        content
        likes
        disLikes
      }
    }
    reviewStatistics {
      one
      two
      three
      four
      five
    }
  }
}
`
export const  CATEGORIES = `
query CategoryList {
  categoryList {
    success
    msg
    categories {
      _id
      icon
      name
      children {
        _id
        icon
        name
        children {
          _id
          icon
          name
        }
      }
    }
  }
}
`
export const  PROPSALS = `
query ListOwnProposals($type: Int, $pageNumber: Int, $limit: Int) {
  listOwnProposals(type: $type, pageNumber: $pageNumber, limit: $limit) {
    msg
    success
    totalCount
    proposals {
      _id
      project {
        title
        slug
        budgetStatusLogs {
          amount
          message
          createdAt
        }
        projectDuration {
          value
          unit
        }
        minBudget
        maxBudget
        priceType
        fixedBudget
      }
      projectOwner {
        profileImg
        _id
        city
        country
      }
      time {
        value
        unit
      }
      cost
      createdAt
    }
  }
}
`

export const CHAT_LIST = ` query Query {
  chatList {
    chatRoom {
      _id
      user {
        _id
        firstName
        lastName
        profileImg
        username
      }
    }
    msg
    success
  }
}`
export const REVIEWS = `
query ListReviews($pageNumber: Int, $limit: Int, $type: Int) {
  listReviews(pageNumber: $pageNumber, limit: $limit, type: $type) {
    success
    msg
    reviews {
      ... on UserReview {
        type
        reviewer {
          _id
          username
          profileImg
        }
        rating
        likes
        disLikes
        content
        createdAt
      }
      ... on ServiceReview {
        type
        disLikes
        likes
        content
        createdAt
        rating
        reviewer {
          _id
          username
          profileImg
        }
      }
    }
    totalCount
  }
}
`
export const OWN_PROJECTS = `
query ProjectList($pageNumber: Int, $limit: Int, $status: Int) {
  cLientOwnProjectList(pageNumber: $pageNumber, limit: $limit, status: $status) {
    success
    msg
    totalCount
    totalPages
    projects {
      _id
      title
      description
      slug
      priceType
      fixedBudget
      minBudget
      maxBudget
      createdAt
      status
      owner {
        city
        country
      }
    }
  }
}
`
