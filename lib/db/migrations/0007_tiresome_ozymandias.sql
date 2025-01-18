CREATE TABLE "club_projects" (
	"projectId" text,
	"name" text,
	"image" text,
	"description" text,
	"constructed_by" text,
	"volunteers" text,
	"year" text
);
--> statement-breakpoint
DROP TABLE "project" CASCADE;