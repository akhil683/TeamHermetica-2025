export interface MemberType {
  id: number
  name: string
  position: string
  image: string
  bio?: string
  social: {
    instagram?: string
    linkedin?: string
  }
}

export const members: MemberType[] = [
  {
    id: 1,
    name: "Priyanshu Garg",
    position: "Club Co-ordinator",
    image: "https://firebasestorage.googleapis.com/v0/b/hermetica-76788.appspot.com/o/Members%2F2nd%20year%2Fpriyanshu.jpg?alt=media&token=6c08fdcc-05b4-4f28-bf49-c3422734f774",
    social: {
      instagram: "https://instagram.com/aditya",
      linkedin: "https://linkedin.com/in/aditya",
    }
  },
  {
    id: 2,
    name: "Rohit Kumar",
    position: "Club Coordinator",
    image: "https://firebasestorage.googleapis.com/v0/b/hermetica-76788.appspot.com/o/Members%2F2nd%20year%2Frohit.jpeg?alt=media&token=3b1e862a-805f-4b32-8d92-2baaa849c5b3",
    social: {
      instagram: "https://instagram.com/nikhil",
      linkedin: "https://linkedin.com/in/nikhil",
    }
  },
  {
    id: 3,
    name: "Shivansh Sood",
    position: "Final Year",
    image: "https://firebasestorage.googleapis.com/v0/b/hermetica-76788.appspot.com/o/Members%2F2nd%20year%2Frohit.jpeg?alt=media&token=3b1e862a-805f-4b32-8d92-2baaa849c5b3",
    social: {
      instagram: "https://instagram.com/nikhil",
      linkedin: "https://linkedin.com/in/nikhil",
    }
  },
  {
    id: 1,
    name: "Akhil",
    position: "Co-ordinator",
    image: "https://firebasestorage.googleapis.com/v0/b/hermetica-76788.appspot.com/o/Members%2F2nd%20year%2Fpriyanshu.jpg?alt=media&token=6c08fdcc-05b4-4f28-bf49-c3422734f774",
    social: {
      instagram: "https://instagram.com/aditya",
      linkedin: "https://linkedin.com/in/aditya",
    }
  },
]
