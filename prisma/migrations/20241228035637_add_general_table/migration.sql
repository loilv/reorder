-- CreateTable
CREATE TABLE "General" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "active" BOOLEAN NOT NULL DEFAULT false,
    "orderList" BOOLEAN NOT NULL DEFAULT false,
    "orderDetail" BOOLEAN NOT NULL DEFAULT false,
    "thankyouPage" BOOLEAN NOT NULL DEFAULT false,
    "sendMail" BOOLEAN NOT NULL DEFAULT false
);
