const gulp = require("gulp");
const sass = require("gulp-sass");
const concat = require("gulp-concat");
const babel = require("gulp-babel");
const browserSync = require("browser-sync").create();
const reload = browserSync.reload;

gulp.task("styles", () => {
	return gulp.src("styles/*.scss")
		.pipe(sass().on("error", sass.logError))
		.pipe(concat("style.css"))
		.pipe(gulp.dest("styles"))
		.pipe(reload({stream: true}));
});

gulp.task("browser-sync", () => {
	browserSync.init({
		server: "."
	});
});

gulp.task("scripts", () => {
	return gulp.src("./dev/scripts/main.js")
	.pipe(babel({
		presets: ["es2015"]
	}))
	.pipe(gulp.dest("./public/scripts"))
	.pipe(reload({stream: true}))
	.on("error", function(error) {
		console.log(error);
	});
});

gulp.task("watch", () => {
	gulp.watch("styles/**/*.scss", ["styles"]);
	gulp.watch("./dev/scripts/main.js", ["scripts"]);
	gulp.watch("*.html", reload);
});

gulp.task("default", ["browser-sync", "watch", "styles", "scripts"]);
