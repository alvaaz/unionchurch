/*
  Warnings:

  - You are about to drop the `Task` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Task" DROP CONSTRAINT "Task_assignedTo_fkey";

-- DropTable
DROP TABLE "Task";

-- DropEnum
DROP TYPE "TaskPriorityType";

-- CreateTable
CREATE TABLE "Redirect" (
    "id" TEXT NOT NULL,
    "source" TEXT NOT NULL DEFAULT E'',
    "destination" TEXT NOT NULL DEFAULT E'',

    CONSTRAINT "Redirect_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Redirect_source_key" ON "Redirect"("source");
