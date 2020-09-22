
//

const setLanguages = [];

function TextNode( engText, frText ) {

	frText = frText ? frText : engText;

	const node = document.createTextNode( engText );

	setLanguages.push( ( language ) => {

		node.nodeValue = language === 'english' ? engText : frText;

	})

	return node

};

//

function setLanguage( language ) {

	setLanguages.forEach( (fn) => fn( language ) );

};

export { setLanguage }
export default {

	// MENU

	menu: {
		consulting: TextNode( "Consulting", "Conseil" ),
		prototypes: TextNode( "Prototypes & Viewers", "Prototypes & Rendus" ),
		casting: TextNode( "Casting Parts", "Pièces de Fonte" ),
		doc: TextNode( "Documentation" ),
		webdev: TextNode( "Web Development", "Développement Web" ),
		samples: TextNode( "Demos", "Démonstrations" ),
		contact: TextNode( "Contact & Rate", "Contact & Tarifs" )
	},

	// HOMEPAGE

	homepage: {

		// INTRO SCENE

		intro: {
			intro: TextNode(
				'High Jewellery Design',
				'Design de Haute Joaillerie'
			)
		},

		// EXPERTISE SCENE

		expertise: {
			title: TextNode( "Consulting", "Conseil" ),

			text: TextNode(
				`Backed by my experience working with the most demanding 
				high jewelry companies, I am able to advise you 
				in your projects.`,

				`Fort d'une expérience de travail avec les maisons de 
				joaillerie les plus exigeantes, je suis à même de vous 
				conseiller dans vos projets.`
			),

			more: TextNode( "learn more ", "voir plus " )
		},

		// PROTOTYPES SCENE

		prototypes: {
			title: TextNode(
				"Prototypes & viewers",
				"Prototypes & rendus"
			),

			text: TextNode(
				`Early in development you 
				will review resin 
				prototypes and photorealistic 
				viewers in order to pinpoint 
				issues fast and respect 
				your schedule.`,

				`Tôt pendant le développement,
				vous examinerez des rendus et des 
				prototypes en résine pour 
				identifier les problèmes rapidement et
				respecter vos échéances.`
			),

			more: TextNode( "learn more ", "voir plus " )
		},

		// CASTING PARTS SCENE

		casting: {
			title: TextNode( "Casting parts", "Pièces de fonte" ),

			text: TextNode(
				`Once your jewel is designed, 
				I can supply lost-wax casting parts 
				in all kind of metals : 
				gold, silver, platinum, 
				or even titanium.`,

				`Une fois votre bijou conçu,
				Je peux fournir des pièces de fonte
				à cire perdu en métaux variés : 
				or, argent, platine, et même titane.`
			),

			more: TextNode( "learn more ", "voir plus " )
		},

		// DOCUMENTATION SCENE

		doc: {
			title: TextNode( "Documentation" ),

			text: TextNode(
				`I can provide the documentation that 
				suit your need. Assembly instructions, 
				stone setting blueprints, painting layouts...`,

				`Je peux fournir la documentation
				dont vous avez besoin. Plans de montage,
				nomenclatures, plans quatre vues...`
			),

			more: TextNode( "learn more ", "voir plus " )
		},

		// CONTACT SCENE

		contact: {
			title: TextNode( "More information :", "Plus d'information :" ),

			webdevLink: TextNode( 'Web development ', 'Développement Web ' ),
			samplesLink: TextNode( 'Demos ', 'Démonstrations ' ),
			contactLink: TextNode( 'Contact & Rate', 'Contact & Tarifs' )
		}

	},

	// INFO MODULES

	modules: {

		// EXPERTISE

		expertise: {
			title: TextNode( "Consulting", "Conseil" ),

			presentation: {
				title: TextNode( "Who am I ?", "Qui suis-je ?" ),

				speech1: TextNode(
					`I worked for more than two years as a 
					technical designer for Lasbleiz Fournier Vitiello 
					in Paris, which is a workshop famous in 
					Place Vendôme high jewelry community for 
					its quality work. Thereafter I lived in 
					Hong Kong during three years, 
					working for Michelle Ong who makes jewels 
					for the most picky amateurs of this city-state.`,

					`J'ai travaillé pendant plus de deux ans chez
					Lasbleiz Fournier Vitiello en tant
					que CAO ( Concepteur Assisté par Ordinateur ),
					cet atelier est connu dans la communauté de
					la place Vendôme pour son travail de grande qualité.
					J'ai ensuite vécu trois ans à Hong Kong où
					j'ai travaillé pour Michelle Ong,
					qui fabrique des bijoux pour les plus fins 
					connaisseurs de cette cité-état.`
				),
			
				speech2: TextNode(
						`On the basis of my design and project management 
						skills acquired during these years, 
						I can give you precious advices to help you making 
						your projects happen.`,

						`Sur la base de ces compétences en design et en gestion de projet,
						je peux vous offrir un conseil précieux pour
						vous aider à réaliser vos objectifs.`
					)
			},

			service: {
				title: TextNode( "My consulting services", "Mon service de conseil" ),

				speech: TextNode(
					`You can hire me to manage your design projects,
					 or as an advisor who can help you making the right
					 decision when you are in occasional need.`,

					`Vous pouvez m'engager pour gérer vos projets 
					de design, ou en tant que consultant pour 
					vous aider à prendre la bonne décision 
					quand vous avez une question ponctuelle.`
				)
			}
			
		},

		// PROTOTYPES

		prototypes: {
			title: TextNode( 'Prototypes & 3D viewers', "Prototypes & rendus" ),

			speech1: TextNode(
				`Designing is a progressive process, 
				scattered with unexpected issues. 
				We are going to work jointly to 
				reveal all the unforeseen details and 
				oversights of the original project, 
				in order to arrive at a product 
				esthetically and technically flawless 
				at the delivery date you will request.`,

				`Le design est un processus évolutif,
				parsemé d'imprévus. Nous allons 
				travailler conjointement pour révéler les
				problèmes conceptuels du design originel,
				pour pouvoir arriver à un produit esthétiquement
				et techniquement parfait à la date de
				livraison que vous aurez défini.`
			),

			speech2: TextNode(
				`To arrive at this perfect design and 
				to save us from discovering flaws 
				late in product development, 
				we will regularly organize design reviews 
				supported by resin prototypes and/or 3D viewers.`,

				`Pour obtenir ce design parfait et nous 
				épargner la découverte de défauts tard 
				dans la conception du produit, nous 
				organiserons régulièrement des révisions
				du design, supportées par des prototypes
				en résine et/ou des rendus 3D photoréalistes.`
			),

			speech3: TextNode(
				`If you don't happen to own a 3D printer to print
				the prototypes, don't worry : I can handle it and ship them to you.`,

				`Si vous ne possédez pas d'imprimante 3D pour
				l'impression des prototypes, pas d'inquiétude : 
				je m'en occupe pour vous, et vous les fait
				livrer.`
			)
		},

		// CASTING

		casting: {
			title: TextNode( 'Casting Parts', 'Pièces de fonte' ),

			speech1: TextNode(
				`Your project is designed. Now you can 
				opt for lost-wax casting via 3D printing to 
				speed up your process, and ensure that the 
				finished jewel you will get is as close as possible 
				from what we designed together. 
				On the basis of with my jewelry handcrafting know-how, 
				particularly in the stone setting field, 
				I can adapt your design to the technical requirements 
				of 3D printing, casting, and all the subsequent stages 
				of jewelry handcrafting.`,

				`Votre projet est conçu et dessiné. Vous pouvez
				maintenant opter pour la fonte à cire perdue via
				l'impression 3D pour accélerer la réalisation, 
				et garantir que le bijou fini sera au plus 
				proche de ce que nous avons conçu ensemble. 
				Fort de mes connaissances pratiques en fabrication
				de bijou, particulièrement dans le domaine
				du sertissage, je peux adapter votre design
				aux contraintes techniques de l'impression 3D,
				de la fonte à cire perdue, et de toutes les
				étapes ultérieures de fabrication.`
			),

			speech2: TextNode(
				`If you are not lucky enough to own a 3D printer, 
				I offer to ship the parts directly to your workshop
				via reliable conveyor.`,

				`Si vous ne possédez pas votre propre imprimante 3D
				adaptée à la fonte à cire perdue, je me propose de 
				vous envoyer les fontes directement à votre atelier
				par transporteur sécurisé.`
			)
		},

		// DOCUMENTATION

		doc: {
			title: TextNode( 'Documentation' ),

			speech1: TextNode(
				`Once your project is designed, 
				you are not left on your own. 
				I send you all the documentation you need to 
				assemble the parts, set the stones, 
				and even communicate and advertise about your jewel.`,

				`Une fois votre projet conçu, vous n'êtes pas
				laissé à vous-même. Je vous envoie toute la 
				documentation dont vous avez besoin pour 
				assembler les éléments, sertir les pierres, 
				et même communiquer sur votre bijou.`
			),

			speech2: TextNode(
				`I adapt the documentation to every project, 
				and listen to your special demands : 
				parts spreadsheets for your inventory, 
				documents for public presentations 
				or customer use, 4-views layouts for painting... 
				Name your own needs.`,

				`J'adapte la documentation à chaque projet,
				et répond à vos demandes spéciales :
				tableaux pour vos inventaires, documents pour
				vos présentations publiques ou privées, plans 
				quatre vues à gouacher... Vous n'avez qu'à
				demander.`
			)
		},

		// WEB DEVELOPMENT

		webdev: {
			title: TextNode( 'Web Development', 'Développement web' ),

			speech1: TextNode(
				`Web development has been my passion 
				for some years, and I offer my 
				services in this field. My skills in jewelry, 
				3D modeling and web development are a rare 
				and precious combination if you are a 
				jewelry company with a project of high-end online service.`,

				`Le développement web a été ma passion 
				ces dernières années, et j'offre mes services
				dans ce domaine. Mes compétences en joaillerie,
				modélisation 3D et développement web sont une
				combinaison rare et précieuse si vous êtes une
				entreprise de joaillerie avec un projet de service
				en ligne.`
			),

			speech2: TextNode(
				`This website you are browsing was entirely designed and 
				coded by myself with the latest web technologies
				( Node.js, Three.js, Webpack, etc... ).
				The 3D models displayed in the various scenes 
				of the front page are mine, and required
				a specific treatment for realtime rendering.`,

				`Ce site que vous visitez a été entièrement designé et
				programmé par moi-même avec les dernières
				technologies web ( Node.js, Three.js, 
				Webpack, etc... ). Les modèles 3D affichés
				dans chaque scène de la page d'accueil sont les miens,
				et on nécessité un traitement spécial pour le
				rendu en temps réel.`
			)
		},

		// SAMPLES

		samples: {
			title: TextNode( "Demos", "Démonstrations" ),

			renders: TextNode( 'Photorealistic Rendering', 'Rendus Photoréalistes' ),

			cad: TextNode( 'CAD 3D Models', 'Models 3D CAO' )
		},

		// CONTACT

		contact: {
			title: TextNode( 'Contact & Rate', 'Contact & Tarifs' ),

			speech: TextNode(
				`I am eager to answer any information
				demand and make quotations tailored to
				your special needs. I you want to discuss verbally, 
				we can arrange a Skype or Zoom meeting on request.`,

				`Je suis ravi de répondre à toute demande
				d'information, et de faire un devis ajusté
				à vos besoins. Si vous voulez discuter de
				vive voix, nous pouvons organiser une entrevue
				via Skype ou Zoom.`
			),

			hourlyRate: TextNode(
				'Hourly Rate : 95 USD',
				'Tarif Horaire : 80 €'
			)
		}

	}

}