// prisma/seed.ts
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("Start seeding...");

  // Delete existing records
  await prisma.users.deleteMany({});
  await prisma.members.deleteMany({});

  // Create sample users
  const users = [
    {
      username: "admin",
      email: "admin@example.com",
      password: "admin123",
    },
    {
      username: "john.doe",
      email: "john@example.com",
      password: "password123",
    },
    {
      username: "jane.smith",
      email: "jane@example.com",
      password: "password456",
    },
    {
      username: "tech.lead",
      email: "techlead@example.com",
      password: "secure789",
    },
    {
      username: "product.manager",
      email: "pm@example.com",
      password: "manager321",
    },
  ];

  // Create users
  console.log("Creating users...");
  for (const user of users) {
    const hashedPassword = await bcrypt.hash(user.password, 12);
    const createdUser = await prisma.users.create({
      data: {
        username: user.username,
        email: user.email,
        password: hashedPassword,
      },
    });
    console.log(`Created user: ${createdUser.username}`);
  }

  // Create sample members
  const members = [
    {
      name: "John Smith",
      dob: new Date("1990-03-15"),
      bio: "Senior software engineer with expertise in cloud architecture and distributed systems.",
      yearsOfExperience: 10,
      profileImage: "https://placeholder.com/john-smith.jpg",
    },
    {
      name: "Sarah Johnson",
      dob: new Date("1988-07-22"),
      bio: "Full-stack developer passionate about creating user-friendly web applications.",
      yearsOfExperience: 8,
      profileImage: "https://placeholder.com/sarah-johnson.jpg",
    },
    {
      name: "Michael Chen",
      dob: new Date("1992-11-30"),
      bio: "Backend developer specializing in microservices and API design.",
      yearsOfExperience: 6,
      profileImage: "https://placeholder.com/michael-chen.jpg",
    },
    {
      name: "Emma Wilson",
      dob: new Date("1995-04-10"),
      bio: "Frontend specialist with a keen eye for UI/UX design.",
      yearsOfExperience: 4,
      profileImage: "https://placeholder.com/emma-wilson.jpg",
    },
    {
      name: "David Rodriguez",
      dob: new Date("1987-09-25"),
      bio: "DevOps engineer focused on automation and infrastructure optimization.",
      yearsOfExperience: 12,
      profileImage: "https://placeholder.com/david-rodriguez.jpg",
    },
  ];

  // Create members
  console.log("Creating members...");
  for (const member of members) {
    const createdMember = await prisma.members.create({
      data: member,
    });
    console.log(`Created member: ${createdMember.name}`);
  }

  console.log("Seeding finished.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
