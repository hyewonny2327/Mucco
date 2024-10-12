import { PrismaClient, User } from "@prisma/client";
import { fakerKO as faker } from "@faker-js/faker";

const prisma = new PrismaClient();
const CATEGORY = [
  "전망좋은",
  "자연",
  "동굴",
  "캠핑장",
  "방",
  "한옥",
  "해변",
  "국립공원",
  "인기",
  "수영장",
  "농장",
  "통나무집",
  "디자인",
  "스키",
  "호수",
  "키즈",
  "저택",
  "신규",
  "섬",
  "주택",
  "서핑",
  "골프장",
];
type UserType = {
  name: string | null;
  id: string;
  email: string;
  image: string | null;
  phone: string | null;
};
async function seedUsers() {
  const userData = Array.from({ length: 10 }).map(() => ({
    email: faker.internet.email(),
    name: faker.person.lastName() + faker.person.firstName(),
    image: faker.image.avatar(),
    phone: faker.phone.number().toString(),
  }));

  try {
    if (userData.length > 0) {
      await prisma.user.createMany({ data: userData });
      console.log("Users seeded successfully!");
    }
  } catch (error) {
    console.error("Error seeding users:", error);
  }
}

async function seedRooms(
  totalUsers: {
    id: string;
    email: string;
    name: string | null;
    image: string | null;
    phone: string | null;
  }[]
) {
  if (totalUsers?.length > 1) {
    // for...of를 사용하여 비동기 작업 처리
    for (const _ of Array.from({ length: 20 })) {
      const randomUserIndex = Math.floor(Math.random() * totalUsers.length);
      const randomUser = totalUsers[randomUserIndex];
      const room = {
        title: faker.lorem.words(),
        images: [
          faker.image.urlLoremFlickr({
            category: "hotel",
            width: 500,
            height: 500,
          }),
          faker.image.urlLoremFlickr({
            category: "travel",
            width: 500,
            height: 500,
          }),
          faker.image.urlLoremFlickr({
            category: "nature",
            width: 500,
            height: 500,
          }),
          faker.image.urlLoremFlickr({
            category: "building",
            width: 500,
            height: 500,
          }),
        ],
        lat: getRandomLatitude(),
        lng: getRandomLongitude(),
        address:
          faker.location.state() +
          faker.location.street() +
          faker.location.streetAddress({ useFullAddress: true }),
        desc: faker.lorem.paragraphs(),
        category: CATEGORY[Math.floor(Math.random() * CATEGORY.length)],
        price: parseInt(
          faker.commerce.price({ min: 50000, max: 500000, dec: 0 })
        ),
        userId: randomUser.id,
      };

      console.log(room);
      // 비동기 함수가 완료될 때까지 기다림
      const res = await prisma.room.create({ data: room });
      console.log("res", res);
    }
  }
}

function getRandomLatitude() {
  const minLatitude = 37.4316;
  const maxLatitude = 37.701;

  return faker.number
    .float({
      min: minLatitude,
      max: maxLatitude,
      fractionDigits: 6,
    })
    ?.toString();
}

function getRandomLongitude() {
  const minLongitude = 126.7963;
  const maxLongitude = 127.1839;

  return faker.number
    .float({
      min: minLongitude,
      max: maxLongitude,
      fractionDigits: 6,
    })
    ?.toString();
}
async function main() {
  await seedUsers();

  const totalUsers = await prisma.user.findMany();

  if (totalUsers?.length > 1) {
    await seedRooms(totalUsers);
  } else {
    console.log("totalUsers 비어있음");
  }
  // seedRooms()
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
