var items = [
  {
    label: "My Projects",
    items: [
      {
        label: "Dream Catcher",
        items: [
          {
            label: "<a href='http://luciddreamcatcher.herokuapp.com/' target='_blank' class='link'>Production</a>"
          },
          {
            label: "<a href='https://github.com/nyc-fireflies-2015/DreamCatcher' target='_blank' class='link'>Github Repository</a>"
          }
        ]
      },
      {
        label: "DME Assistant"
        items:[
          {
            label: "<a href='https://dmeassistant.herokuapp.com/' target='_blank' class='link'>Production</a>"
          },
          {
            label: "<a href='https://github.com/arjis02/DMEassistant' target='_blank' class='link'>Github Repository</a>"
          }
        ]
      },
      {
        label: "<a href='https://github.com/nyc-fireflies-2015/slackoverflow' target='_blank' class='link'>Slack Overflow</a>"
      },
      {
        label: "<a href='https://github.com/nyc-fireflies-2015/Survey_Rose' target='_blank' class='link'>Survey Rose</a>"
      },
      {
        label: "<a href='https://github.com/arjis02/TrainRoutes' target='_blank' class='link'>Train Routes</a>"
      }
    ]
  },
  {
    label: "<span class='about-me'>About Me</span>",
    items: []
  }
];

function generateHTML() {
  var main = Handlebars.compile( $( "#main" ).html() );
  Handlebars.registerPartial( "list", $( "#list" ).html() );
  $('.tree').html( main( { items: items } ) );
};