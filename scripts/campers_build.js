function build(e,a){for(var l=0;l<e.length;l++){var s=$("<div>",{"class":"blog"}),i=$("<div>",{"class":"blog_img_container"}),n=$("<div>",{"class":"blog_description"});for(var p in e[l])if("name"===p)n.append($("<h3>").text(e[l].name));else if("imageLocation"===p)i.append($("<img>",{"class":"blog_img",src:e[l][p],alt:"blog title"}));else if("link"===p)n.append($("<a>",{href:e[l].link,target:"_blank"}).text(e[l][p]));else if("description"===p)n.append($("<p>").text(e[l][p]));else if("languages"===p)for(var d in e[l].languages)n.append($("<p>").text(e[l].languages[d]));s.append(i),s.append(n),a?$(".camper_blogs").append(s):$(".camper_projects").append(s)}}build(blogs,!0),build(projects,!1),$(".camper_projects").addClass("hidden"),$("#blog_toggle").click(function(){$(".camper_projects").addClass("hidden"),$(".camper_blogs").removeClass("hidden")}),$("#projects_toggle").click(function(){$(".camper_projects").removeClass("hidden"),$(".camper_blogs").addClass("hidden")});
