var bio = {
    'name': 'Christopher Webb',
    'role': 'Front End Developer',
    'contacts': {
        'mobile': '(555)555-555',
        'email': 'example@example.com',
        'github': 'chriswebb09',
        'twitter': '@example',
        'location': 'New York',
        'blog': 'chriswebb09.github.io',
        'linkedin': 'linkedin.com/chris',
        'facebook': 'facebook.com/chris'
    },
    'welcomeMessage': "Let's Make Something Cool",
    'skills': ['Python', 'Javascript', 'HTML 5', 'Bootstrap', 'CSS3'],
    'biopic': 'https://lh3.googleusercontent.com/-V0iQWuTlQFY/VgHBdJsCmpI/AAAAAAAAABI/nxrD8NwnbLU/w280-h280-p/6uh1e-RAW_profile_logo_.jpg',
    display: function () {
        var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
        var formattedName = HTMLheaderName.replace('%data%', bio.name);
        var formattedHeader = formattedName + formattedRole;
        $('#header').prepend(formattedHeader);
        var formattedPic = HTMLbioPic.replace('%data%', bio.biopic);
        $('.main-container').append(formattedPic);
        var formattedWelcome = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
        $('.main-container').append(formattedWelcome);
        var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
        $('#contacts').append(formattedMobile);
        $('.footer').append(formattedMobile);
        var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
        $('#contacts').append(formattedEmail);
        $('.footer').append(formattedEmail);
        var formattedTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
        $('#contacts').append(formattedTwitter);
        $('.footer').append(formattedTwitter);
        var formattedGithub = HTMLgithub.replace('%data%', bio.contacts.github);
        $('#contacts').append(formattedGithub);
        $('.footer').append(formattedGithub);
        var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);
        $('#contacts').append(formattedLocation);
        $('.footer').append(formattedLocation);
        var formattedBlog = HTMLblog.replace('%data%', bio.contacts.blog);
        $('#contacts').append(formattedBlog);
        $('.footer').append(formattedBlog);
        var formattedLinkedin = HTMLlinkedin.replace('%data%', bio.contacts.linkedin);
        $('#contacts').append(formattedLinkedin);
        $('.footer').append(formattedLinkedin);
        var formattedFacebook = HTMLfacebook.replace('%data%', bio.contacts.facebook);
        $('#contacts').append(formattedFacebook);
        $('.footer').append(formattedFacebook);
        $('.main-container').append(HTMLskillsStart);
        bio.skills.forEach(function(val) {
            var formattedSkill = HTMLskills.replace('%data%', val);
            $('#skills').append(formattedSkill);
        });
    }
};



var education = {
    schools: [
    {
        'name': 'SUNY University',
        'location': 'Albany, New York',
        'degree': 'BA (In Progress)',
        'date ': '2010-2012',
        'major': ['Liberal Arts', 'Business']
    },
    {
        'name': 'St. Thomas Aquinas College',
        'location': 'Sparkill, New York',
        'degree': 'BA (In Progress)',
        'date': '2009-2012',
        'major': ['Liberal Arts']
    },
    {
        'name': 'UC University',
        'location': 'Los Angeles, California',
        'degree': 'BA (In Progress)',
        'date': '2009-2012',
        'major': ['Computer Science']
    }
    ],
    onlineCourses: [
        {
            'name': 'Khan Academy',
            'course': 'Mathematics',
            'date': '2011-2015',
            'url': 'www.khanacademy.org'
        },
        {
            'name': 'SUNY Online',
            'course': 'Algebra',
            'date': 'Summer 2015',
            'url': 'www.suny.edu'
        }
    ],
    display: function() {
        education.schools.forEach(function(val) {
            $('#education').append(HTMLschoolStart);
            var formattedSchoolName = HTMLschoolName.replace('%data%', val.name);
            $('.education-entry:last').append(formattedSchoolName);
            var formattedSchoolDegree = HTMLschoolDegree.replace('%data%', val.degree);
            $('.education-entry:last').append(formattedSchoolDegree);
            var formattedSchoolDates= HTMLschoolDates.replace('%data%', val.date);
            $('.education-entry:last').append(formattedSchoolDates);
            var formattedSchoolLocation= HTMLschoolLocation.replace('%data%', val.location);
            $('.education-entry:last').append(formattedSchoolLocation);
            var formattedSchoolMajor = HTMLschoolMajor.replace('%data%', val.major);
            $('.education-entry:last').append(formattedSchoolMajor);
        });

        education.onlineCourses.forEach(function(val) {
            $('#education').append(HTMLschoolStart);
            var formattedOnlineSchool = HTMLonlineSchool.replace('%data%', val.name);
            var formattedOnlineCourse = HTMLonlineCourse.replace('%data%', val.course);
            var formattedOnlineTitle = formattedOnlineSchool + formattedOnlineCourse;
            $('.education-entry:last').append(formattedOnlineTitle);
            var formattedOnlineDates = HTMLonlineDates.replace('%data%', val.date);
            $('.education-entry:last').append(formattedOnlineDates);
            var formattedURL = HTMLonlineURL.replace('%data%', val.url);
            $('.education-entry:last').append(formattedURL);
        });
    }
};


var work = {
    jobs: [
    {
        'employer': 'Acme Corp',
        'title': 'Office Clerk',
        'location': 'New York',
        'date': '2010 - 2012',
        'description': 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.'
    },
    {
        'employer': 'Community Co-op',
        'title': 'Store Clerk',
        'location': 'San Francisco',
        'date': '2011-2013',
        'description': ' At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.'
    }
    ],
    display: function () {

        work.jobs.forEach(function(val) {
            $('#workExperience').append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace('%data%', val.employer);
            var formttedTitle = HTMLworkTitle.replace('%data%', val.title);
            var formattedEmployerTitle = formattedEmployer + formttedTitle;
            $('.work-entry:last').append(formattedEmployerTitle);
            var formattedDates = HTMLworkDates.replace('%data%', val.date);
            $('.work-entry:last').append(formattedDates);
            var formattedLocation = HTMLworkLocation.replace('%data%', val.location);
            $('.work-entry:last').append(formattedLocation);
            var formattedDescription = HTMLworkDescription.replace('%data%', val.description);
            $('.work-entry:last').append(formattedDescription);
        });
    }
};

var projects = {
    projects: [
    {
        'title': 'Portfolio',
        'date': 'October 2015',
        'description': 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti.',
        'image': 'http://i.ytimg.com/vi/79mA3lp6Nmo/0.jpg'
    },
    {
        'title': 'Project 2',
        'date': '2015 - 2016',
        'description': 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.',
        'image': 'http://i.ytimg.com/vi/79mA3lp6Nmo/0.jpg'
    }
    ],
    display: function() {
        projects.projects.forEach(function(val) {
            $('#projects').append(HTMLprojectStart);
            var formattedProjectTitle = HTMLprojectTitle.replace('%data%', val.title);
            $('.project-entry:last').append(formattedProjectTitle);
            var formattedProjectDates = HTMLprojectDates.replace('%data%', val.date);
            $('.project-entry:last').append(formattedProjectDates);
            var formattedProjectDescription = HTMLprojectDescription.replace('%data%', val.description);
            $('.project-entry:last').append(formattedProjectDescription);
            var formattedProjectImage = HTMLprojectImage.replace('%data%', val.image);
            $('.project-entry:last').prepend(formattedProjectImage);
        });
    }
};



work.display();
bio.display();
projects.display();
education.display();

$('#mapDiv').append(googleMap);