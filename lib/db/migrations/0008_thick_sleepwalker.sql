ALTER TABLE "club_projects" RENAME TO "projects";--> statement-breakpoint
ALTER TABLE "reviews" ADD COLUMN "projectId" text;--> statement-breakpoint
ALTER TABLE "reviews" DROP COLUMN "project";