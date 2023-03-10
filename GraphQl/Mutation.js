export const UPDATE_PROFILE = `
mutation UpdateProfile($username: String, $fullName: String, $email: String, $mobile: String, $gender: String, $description: String, $tagline: String, $city: String, $hourlyRate: String, $position: String) {
updateProfile(username: $username, fullName: $fullName, email: $email, mobile: $mobile, gender: $gender, description: $description, tagline: $tagline, city: $city, hourlyRate: $hourlyRate, position: $position) {
    success
    msg
}
  }
  `
export const UPDATE_EDUCATION = `
mutation UpdateProfile($education: [Education]) {
  updateProfile(education: $education) {
    success
    msg
  }
}
  `