# HarpJS & Bootstrap Website Template

This website template uses HarpJS (http://harpjs.com/) compiler to convert Jade and Sass files to HTML and CSS. Other supported formats include Extended Javascript and Markdown.

This includes a basic static Twitter Bootstrap navbar and sticky footer.

## File Structure

### public & www
 - `public`: uncompiled jade, ejs, markdown, html, sass, css, js files go here
 - `www`: by running `harp compile` in the root directory, www is populated with the complete compiled website. This is the folder that should be referenced by your web server.
 
### public
 - `_include`: files that are included in the layout and other files using "partials" (see HarpJS documentation)
  - `_css.jade`: references css files
  - `_footer.jade`: contains the footer
  - `_header.jade`: contains the header (partial link to menu)
  - `_js.jade`: references javascript files
  - `_menu.jade`: contains the menu (included in the header)
  
 - `css`: contains scss files
 - `fonts`: fonts, including font-awesome, bootstrap, etc.
 - `image`: website images
 - `js`: javascript files, including Bootstrap and JQuery
 
### _layout & index

The `_layout` file is used to compile every other page (including index). It has the HTML, header, body structure and is responsible for rendering the header and footer (via partial links to the _include files).

Index (like other pages) only includes the content for that page. You should not include HTML, header, or body tags in this file. The header and footer will be added automatically via the _layout template (above).