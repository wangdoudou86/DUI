yarn doc
git checkout gh-pages
mv -f doc/* ./
git add .
git commit -m "提交文档"
git push
git checkout -