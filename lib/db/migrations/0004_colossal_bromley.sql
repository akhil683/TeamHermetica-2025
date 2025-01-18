CREATE TABLE "reviews" (
	"projectId" text,
	"name" text,
	"image" text,
	"review" text,
	"email" text,
	"reviewAt" text
);
--> statement-breakpoint
ALTER TABLE "projects" ADD COLUMN "projectId" text;