var gulp = require('gulp');
var slug = require('slug');
var prompt = require('gulp-prompt');
var fs = require('fs');
var dateFormat = require('dateformat');

gulp.task('create-post', function () {
    gulp.src('post_tmp')
        .pipe(prompt.prompt(
            [{
                type: 'input',
                name: 'title',
                message: 'Título do post'
            },
            {
                type: 'input',
                name: 'categories',
                message: 'Categorias do post (separadas por vírgulas)'
            }],
            function (res) {
                var title = res.title;
                var slugTitle = slug(res.title).toLowerCase();
                var date = new Date();
                var formatedDate = dateFormat(date, 'yyyy-mm-dd');
                var categories = res.categories.split(',').map(function (category) {
                    return "- " + category.trim();
                });
                fs.readFile('./post_tmp', 'utf-8', function (err, data) {
                    if (err) {
                        console.error('Error reading template post file');
                        return;
                    }
                    var post = data.replace('{{title}}', title);
                    post = post.replace('{{categories}}', categories.join('\n  '));
                    post = post.replace('{{pl}}', 'permalink');
                    post = post.replace('{{date}}', formatedDate);
                    var fileName = [formatedDate, slugTitle].join('-') + '.md';
                    fs.writeFile('./_posts/' + fileName, post, function (err, data) {
                        if (err) {
                            console.error('Error writing post file');
                            return;
                        }
                        console.log('Post created');
                    });
                });
            }
        ));
});
