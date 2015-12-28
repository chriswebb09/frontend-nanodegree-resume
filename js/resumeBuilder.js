
var bio = {
    name: "Christopher Webb",
    role: "Front End Developer",
    welcomeMessage: "Let's Make Something Cool",
    pic: "https://lh3.googleusercontent.com/-V0iQWuTlQFY/VgHBdJsCmpI/AAAAAAAAABI/nxrD8NwnbLU/w280-h280-p/6uh1e-RAW_profile_logo_.jpg",
    contacts: {
        mobile: "(555)555-555",
        email: "example@example.com",
        twitter: "@example",
        github: "chriswebb09",
        location: "New York",
        blog:  "chriswebb09.github.io",
        linkedin: "linkedin.com/chris",
        facebook: "facebook.com/chris"
    },
    skills: ["Python", "Javascript", "HTML 5", "Bootstrap", "CSS3"],
    displayBio: function() {
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedHeader = formattedName + formattedRole;
        $("#header").prepend(formattedHeader);
        var formattedPic = HTMLbioPic.replace("%data%", bio.pic);
        $(".main-container").append(formattedPic);
        var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $(".main-container").append(formattedWelcome);
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        $("#contacts").append(formattedMobile);
        $(".footer").append(formattedMobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        $("#contacts").append(formattedEmail);
        $(".footer").append(formattedEmail);
        var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        $("#contacts").append(formattedTwitter);
        $(".footer").append(formattedTwitter);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        $("#contacts").append(formattedGithub);
        $(".footer").append(formattedGithub);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        $("#contacts").append(formattedLocation);
        $(".footer").append(formattedLocation);
        var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
        $("#contacts").append(formattedBlog);
        $(".footer").append(formattedBlog);
        var formattedLinkedin = HTMLlinkedin.replace("%data%", bio.contacts.linkedin);
        $("#contacts").append(formattedLinkedin);
        $(".footer").append(formattedLinkedin);
        var formattedFacebook = HTMLfacebook.replace("%data%", bio.contacts.facebook);
        $("#contacts").append(formattedFacebook);
        $(".footer").append(formattedFacebook);
        $(".main-container").append(HTMLskillsStart);
        for (skill in bio.skills) {
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
            $("#skills").append(formattedSkill);
        }
    }
}

var work = {
    jobs: [
    {
        employer: "Acme Corp",
        title: "Office Clerk",
        dates: "2010 - 2012",
        location: "New York",
        description: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."
    },
    {
        employer: "Community Co-op",
        title: "Store Clerk",
        dates: "2011-2013",
        location: "San Francisco",
        description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae."
    }
    ],
    displayWork: function() {
        for (job in work.jobs) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
            var formttedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
            var formattedEmployerTitle = formattedEmployer + formttedTitle;
            $(".work-entry:last").append(formattedEmployerTitle);
            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            $(".work-entry:last").append(formattedDates);
            var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
            $(".work-entry:last").append(formattedLocation);
            var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
            $(".work-entry:last").append(formattedDescription);
        }
    };
}

var projects = {
    projects: [
    {
        title: "Portfolio",
        dates: "October 2015",
        description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti.",
        images: ["http://i.ytimg.com/vi/79mA3lp6Nmo/0.jpg"]
    },
    {
        title: "Project 2",
        dates: "2015 - 2016",
        description: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.",
        images: ["http://i.ytimg.com/vi/79mA3lp6Nmo/0.jpg"]
    }
    ],
    displayProjects: function() {
        for (project in projects.projects) {
            $("#projects").append(HTMLprojectStart);
            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
            $(".project-entry:last").append(formattedProjectTitle);
            var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
            $(".project-entry:last").append(formattedProjectDates);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
            $(".project-entry:last").append(formattedProjectDescription);
            for (image in projects.projects[project].images) {
                var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").prepend(formattedProjectImage);
            }
        }
    }

}

var education = {
    schools : [
    {
        name: "SUNY University",
        location: "Albany, New York",
        degree: "BA (In Progress)",
        dates: "2010-2012",
        major : ["Liberal Arts", "Business"],
    },
    {
        name: "St. Thomas Aquinas College",
        location: "Sparkill, New York",
        degree: "BA (In Progress)",
        dates: "2009-2012",
        major: ["Liberal Arts"]
    },
    {
        name: "UC University",
        location: "Los Angeles, California",
        degree: "BA (In Progress)",
        dates: "2009-2012",
        major: ["Computer Science"]
    }
    ],
    onlineCourses: [
        {
            name: "Khan Academy",
            course: "Mathematics",
            dates: "2011-2015",
            url: "www.khanacademy.org"
        },
        {
            name: "SUNY Online",
            course: "Algebra",
            dates: "Summer 2015",
            url: "www.suny.edu"
        }
    ],
    displayEducation: function() {

        for (school in education.schools) {
            $("#education").append(HTMLschoolStart);
            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
            $(".education-entry:last").append(formattedSchoolName);
            var formattedSchoolDegree= HTMLschoolDegree.replace("%data%", education.schools[school].degree);
            $(".education-entry:last").append(formattedSchoolDegree);
            var formattedSchoolDates= HTMLschoolDates.replace("%data%", education.schools[school].dates);
            $(".education-entry:last").append(formattedSchoolDates);
            var formattedSchoolLocation= HTMLschoolLocation.replace("%data%", education.schools[school].location);
            $(".education-entry:last").append(formattedSchoolLocation);
            var formattedSchoolMajor= HTMLschoolMajor.replace("%data%", education.schools[school].major);
            $(".education-entry:last").append(formattedSchoolMajor);
        }

        for (course in education.onlineCourses) {
            $("#education").append(HTMLschoolStart);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].name);
            var formattedOnlineCourse = HTMLonlineCourse.replace("%data%", education.onlineCourses[course].course);
            var formattedOnlineTitle = formattedOnlineSchool + formattedOnlineCourse;
            $(".education-entry:last").append(formattedOnlineTitle);
            var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
            $(".education-entry:last").append(formattedOnlineDates);
            var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
            $(".education-entry:last").append(formattedURL);
        }

    }
}


work.displayWork();
bio.displayBio();
projects.displayProjects();
education.displayEducation();

$("#mapDiv").append(googleMap);