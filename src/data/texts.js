
// HOMEPAGE

const homepage = {

	// GLOBAL

	global: {
		more: "learn more"
	},

	// INTRO SCENE

	intro: {
		intro: 'High Jewellery Design'
	},

	// EXPERTISE SCENE

	expertise: {
		title: "Consulting",
		text: `Having worked with the most demanding 
				high jewelry companies, I can advise you 
				wisely with your projects.`
	},

	// PROTOTYPES SCENE

	prototypes: {
		title: "Prototypes & viewers",
		text: `Early in development you 
				will review resin 
				prototypes and photorealistic 
				viewers in order to pinpoint 
				issues fast and respect 
				your schedules.`
	},

	// CASTING PARTS SCENE

	casting: {
		title: "Casting parts",
		text: `Once your jewel is designed, 
				I can supply lost-wax casting parts 
				in all kind of metals : 
				gold, silver, platinum, 
				or even titanium.`
	},

	// DOCUMENTATION SCENE

	doc: {
		title: "Documentation",
		text: `I can provide the documentation that suit your need.  
				Assembly instructions, stone setting blueprints, painting layouts, 
				everything is covered.`
	},

	// CONTACT SCENE

	contact: {
		title: "More information :",
		webdevLink: 'Web development',
		samplesLink: 'Review some samples',
		contactLink: 'Contact'
	}

};

// INFO MODULES

const modules = {

	// EXPERTISE

	expertise: {
		title: "Consulting",

		presentation: {
			title: "Who am I ?",

			speech1: `I worked for more than two years as a 
					technical designer for <i>Lasbleiz Fournier Vitiello</i> 
					in Paris, which is a workshop famous in 
					Place Vendôme high jewelry community for 
					its quality work. Thereafter I lived in 
					Hong Kong for another couple of years, 
					working for <i>Michelle Ong</i> who makes jewels 
					for the finest amateurs of this city-state.`,
		
			speech2: `Armed with the design and project management 
						skills acquired during these years, 
						I can give you precious advices to make 
						your projects happen.`
		},

		service: {
			title: "My service",

			speech: `You can hire my to manage a design project of yours,
					 or simply as an advisor who can help you making the right
					 decision when you have some doubts.`
		}
		
	},

	// PROTOTYPES

	prototypes: {
		title: 'Prototypes & 3D viewers',

		speech1: `Designing is never a seamless process. 
					Our task will be to work jointly to 
					reveal all the unforeseen details and 
					oversights of the original project, 
					in order to arrive at a product 
					esthetically and technically flawless 
					at the delivery date you will request.`,

		speech2: `To arrive at this perfect design and 
					to save us from discovering flaws 
					late in product development, 
					we will regularly organize design reviews 
					supported by resin prototypes and/or 3D viewers.`,

		speech3: `If you don't happen to own a 3D printer to print
					the prototypes, don't worry : I can handle that
					for you, and ship them to your office.`
	},

	// CASTING

	casting: {
		title: 'Casting Parts',

		speech1: `Your project is designed. Now you can 
					choose lost-wax casting via 3D printing to 
					speed up your process, and ensure that the 
					finished jewel you will get is as close as possible 
					from what we designed together. 
					Armed with my jewelry handcrafting know-how, 
					particularly in the stone setting field, 
					I can adapt your design to the technical requirements 
					of 3D printing, casting, and all the subsequent stages 
					of jewelry handcrafting.`,

		speech2: `If you are not lucky enough to own a 3D printer, 
					I offer to ship the parts directly to your workshop
					via reliable conveyor.`
	},

	// DOCUMENTATION

	doc: {
		title: 'Technical Documentation',

		speech1: `Once your project is designed, 
					you are not left alone in the wild. 
					I send you all the documentation you need to 
					assemble the parts, set the stones, 
					and even communicate and advertise about it.`,

		speech2: `I adapt the documentation to every project, 
					and listen to your special demands, 
					be it parts spreadsheets for your inventory, documents for public presentations 
					or customer use, 4-views layouts for painting... 
					Name your own needs.`
	},

	// WEB DEVELOPMENT

	webdev: {
		title: 'Web Development',

		speech1: `Web development has been my passion 
					for a couple of years, and I offer my 
					services in this field. My skills in jewelry, 
					3D modeling and web development is a rare 
					and precious combination if you are a 
					jewelry company with a project of high-end online service.`,

		speech2: `This website you are browsing was entirely designed and 
					coded by myself with the latest web technologies
					(&#xA0;Node.js, Three.js, Webpack, etc...&#xA0;).
					The 3D models displayed in the various scenes 
					of the front page are mine, and necessitated
					some specific treatment for realtime rendering.`
	}

}

//

export default {
	homepage,
	modules
}