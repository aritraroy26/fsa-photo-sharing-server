const USER_ID_1 = "2uMrJZJmsUUQfrZmYjewCCNHku13";
const USER_ID_2 = "QA259l2MPwdnTWWeFx1x4YrqxLK2 ";
const USER_ID_3 = "VNxmwr1ghJOJbaQjt2NxmrmK5Qp1";

module.exports.users = [
  {
    id: USER_ID_1,
    email: "mimi@gmail.com",
    fullName: "Mimi Das",
  },
  {
    id: USER_ID_2,
    email: "aparna@gmail.com",
    fullName: "Aparna Rpy",
  },
  {
    id: USER_ID_3,
    email: "samir@gmail.com",
    fullName: "Samir Roy",
  },
];

module.exports.photos = [
  {
    url: "/MB_1.jpg",
    title: "Mohun Bagan Wallpaper 1",
    ownerId: USER_ID_1,
    sharedWith: [USER_ID_2],
  },
  {
    url: "/MB_2.jpg",
    title: "Mohun Bagan Wallpaper 2",
    ownerId: USER_ID_2,
    sharedWith: [USER_ID_1],
  },
];
