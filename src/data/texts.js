
function TextNode( text ) {

	return document.createTextNode( text )

};

//

const texts = {

	////////////
	// ENGLISH
	////////////

	english: {

		// MENU

		menu: {
			consulting: TextNode( "Consulting" ),
			prototypes: TextNode( "Prototypes & Viewers" ),
			casting: TextNode( "Casting Parts" ),
			doc: TextNode( "Documentation" ),
			webdev: TextNode( "Web Development" ),
			samples: TextNode( "Samples" ),
			contact: TextNode( "Contact" )
		},

		// HOMEPAGE

		homepage: {

			// GLOBAL

			global: {
				more: TextNode( "&#xA0;&#xA0;&#xA0;learn more&#xA0;&#xA0;&#xA0;" )
			},

			// INTRO SCENE

			intro: {
				intro: TextNode( 'High Jewellery Design' )
			},

			// EXPERTISE SCENE

			expertise: {
				title: TextNode( "Consulting" ),

				text: TextNode( `Backed by my experience working with the most demanding 
						high jewelry companies, I am able to advise you 
						in your projects.` ),

				more: TextNode( "learn more " )
			},

			// PROTOTYPES SCENE

			prototypes: {
				title: TextNode( "Prototypes & viewers" ),

				text: TextNode( `Early in development you 
						will review resin 
						prototypes and photorealistic 
						viewers in order to pinpoint 
						issues fast and respect 
						your schedule.` ),

				more: TextNode( "learn more " )
			},

			// CASTING PARTS SCENE

			casting: {
				title: TextNode( "Casting parts" ),

				text: TextNode( `Once your jewel is designed, 
						I can supply lost-wax casting parts 
						in all kind of metals : 
						gold, silver, platinum, 
						or even titanium.` ),

				more: TextNode( "learn more " )
			},

			// DOCUMENTATION SCENE

			doc: {
				title: TextNode( "Documentation" ),

				text: TextNode( `I can provide the documentation that 
									suit your need. Assembly instructions, 
									stone setting blueprints, painting layouts...` ),

				more: TextNode( "learn more " )
			},

			// CONTACT SCENE

			contact: {
				title: TextNode( "More information :" ),

				webdevLink: TextNode( 'Web development' ),
				samplesLink: TextNode( 'Samples' ),
				contactLink: TextNode( 'Contact' )
			}

		},

		// INFO MODULES

		modules: {

			// EXPERTISE

			expertise: {
				title: TextNode( "Consulting" ),

				presentation: {
					title: TextNode( "Who am I ?" ),

					speech1: TextNode( `I worked for more than two years as a 
							technical designer for Lasbleiz Fournier Vitiello 
							in Paris, which is a workshop famous in 
							Place Vendôme high jewelry community for 
							its quality work. Thereafter I lived in 
							Hong Kong for another couple of years, 
							working for Michelle Ong who makes jewels 
							for the finest amateurs of this city-state.` ),
				
					speech2: TextNode( `Armed with the design and project management 
								skills acquired during these years, 
								I can give you precious advices to helper you making 
								your projects happen.` )
				},

				service: {
					title: TextNode( "My service" ),

					speech: TextNode( `You can hire me to manage your design projects,
							 or as an advisor who can help you making the right
							 decision when you have some doubts.` )
				}
				
			},

			// PROTOTYPES

			prototypes: {
				title: TextNode( 'Prototypes & 3D viewers' ),

				speech1: TextNode( `Designing is a progressive process, 
							scattered with unexpected issues. 
							Our task will be to work jointly to 
							reveal all the unforeseen details and 
							oversights of the original project, 
							in order to arrive at a product 
							esthetically and technically flawless 
							at the delivery date you will request.` ),

				speech2: TextNode( `To arrive at this perfect design and 
							to save us from discovering flaws 
							late in product development, 
							we will regularly organize design reviews 
							supported by resin prototypes and/or 3D viewers.` ),

				speech3: TextNode( `If you don't happen to own a 3D printer to print
							the prototypes, don't worry : I can handle that
							for you, and ship them to your office.` )
			},

			// CASTING

			casting: {
				title: TextNode( 'Casting Parts' ),

				speech1: TextNode( `Your project is designed. Now you can 
							choose lost-wax casting via 3D printing to 
							speed up your process, and ensure that the 
							finished jewel you will get is as close as possible 
							from what we designed together. 
							Armed with my jewelry handcrafting know-how, 
							particularly in the stone setting field, 
							I can adapt your design to the technical requirements 
							of 3D printing, casting, and all the subsequent stages 
							of jewelry handcrafting.` ),

				speech2: `If you are not lucky enough to own a 3D printer, 
							I offer to ship the parts directly to your workshop
							via reliable conveyor.`
			},

			// DOCUMENTATION

			doc: {
				title: TextNode( 'Documentation' ),

				speech1: TextNode( `Once your project is designed, 
							you are not left on your own. 
							I send you all the documentation you need to 
							assemble the parts, set the stones, 
							and even communicate and advertise about it.` ),

				speech2: TextNode( `I adapt the documentation to every project, 
							and listen to your special demands : 
							parts spreadsheets for your inventory, 
							documents for public presentations 
							or customer use, 4-views layouts for painting... 
							Name your own needs.` )
			},

			// WEB DEVELOPMENT

			webdev: {
				title: TextNode( 'Web Development' ),

				speech1: TextNode( `Web development has been my passion 
							for a couple of years, and I offer my 
							services in this field. My skills in jewelry, 
							3D modeling and web development are a rare 
							and precious combination if you are a 
							jewelry company with a project of high-end online service.` ),

				speech2: TextNode( `This website you are browsing was entirely designed and 
							coded by myself with the latest web technologies
							( Node.js, Three.js, Webpack, etc... ).
							The 3D models displayed in the various scenes 
							of the front page are mine, and necessitated
							some specific treatment for realtime rendering.` )
			},

			// SAMPLES

			samples: {
				title: TextNode( "Samples" ),

				renders: TextNode( 'Photorealistic Rendering' ),

				cad: TextNode( 'CAD 3D Models' )
			},

			// CONTACT

			contact: {
				title: TextNode( 'Contact' ),

				speech: TextNode( `I am eager to answer any information
							demand and make quotations tailored to
							your special needs. I you want to discuss verbally, 
							we can arrange a Skype or Zoom meeting on request.` )
			}

		}

	},

	///////////
	// FRENCH
	///////////

	french: {

		// MENU

		menu: {
			consulting: TextNode( "Conseil" ),
			prototypes: TextNode( "Prototypes & Rendus" ),
			casting: TextNode( "Pièces de Fonte" ),
			doc: TextNode( "Documentation" ),
			webdev: TextNode( "Développement Web" ),
			samples: TextNode( "Échantillons" ),
			contact: TextNode( "Contact" )
		},

		// HOMEPAGE

		homepage: {

			// GLOBAL

			global: {
				more: TextNode( "voir plus" )
			},

			// INTRO SCENE

			intro: {
				intro: TextNode( 'Design Haute Joaillerie' )
			},

			// EXPERTISE SCENE

			expertise: {
				title: TextNode( "Conseil" ),

				text: TextNode( `Fort d'une expérience de travail avec les maisons de 
						joaillerie les plus exigeantes, je suis à même de vous 
						conseiller dans vos projects.` )
			},

			// PROTOTYPES SCENE

			prototypes: {
				title: TextNode( "Prototypes & rendus" ),

				text: TextNode( `Tôt pendant le développement,
						vous examinerez des prototypes en résine
						et des rendus photoréalistes, pour 
						identifier les problèmes rapidement et
						respecter vos échéances.` )
			},

			// CASTING PARTS SCENE

			casting: {
				title: TextNode( "Pièces de fonte" ),
				text: TextNode( `Une fois votre bijou conçu,
						Je peux fournir des pièces de fonte
						à cire perdu en métaux variés : 
						or, argent, platine, et même titane.` )
			},

			// DOCUMENTATION SCENE

			doc: {
				title: TextNode( "Documentation" ),
				text: TextNode( `Je peux fournir la documentation
						dont vous avez besoin. Plans de montage,
						nomenclatures, dessins pour gouache...` )
			},

			// CONTACT SCENE

			contact: {
				title: TextNode( "Plus d'information :" ),
				webdevLink: TextNode( 'Développement web' ),
				samplesLink: TextNode( 'Échantillons' ),
				contactLink: TextNode( 'Contact' )
			}

		},

		// INFO MODULES

		modules: {

			// EXPERTISE

			expertise: {
				title: TextNode( "Conseil" ),

				presentation: {
					title: TextNode( "Qui suis-je ?" ),

					speech1: TextNode( `J'ai travaillé pendant plus de deux ans chez
								<i>Lasbleiz Fournier Vitiello</i> en tant
								que CAO ( Concepteur Assisté par Ordinateur ),
								cet atelier est connu dans la communeauté de
								la place Vendôme pour son travail de grande qualité.
								J'ai ensuite vécu trois ans à Hong Kong où
								j'ai travaillé pour <i>Michelle Ong</i>,
								qui fabrique des bijoux pour les plus fins 
								connaisseurs de cette cité-état.` ),
				
					speech2: TextNode( `Armé de ces compétences en design et en gestion,
								je peux vous offrir un conseil précieux pour
								vous aider à réaliser vos projets.` )
				},

				service: {
					title: TextNode( "Mon service" ),

					speech: TextNode( `Vous pouvez m'engager pour gérer vos projets 
								de design, ou en tant que consultant pour 
								vous aider à prendre la bonne décision 
								quand vous avez un doute.` )
				}
				
			},

			// PROTOTYPES

			prototypes: {
				title: TextNode( 'Prototypes & rendus' ),

				speech1: TextNode( `Le design est un processus évolutif,
							parsemé d'imprévus. Notre tâche sera de 
							travailler conjointement pour révéler les
							problèmes conceptuels du design originel,
							pour pouvoir arriver à un produit esthétiquement
							et techniquement parfait à la date de
							livraison que vous aurez défini.` ),

				speech2: TextNode( `Pour obtenir ce design parfait et nous 
							épargner la découverte de défaults tard 
							dans la conception du produit, nous 
							organiseront régulièrement des révisions
							du design, supportées par des prototypes
							en résine et/ou des rendus 3D photoréalistes.` ),

				speech3: TextNode( `Si vous ne possédez pas d'imprimante 3D pour
							l'impression des prototypes, pas d'inquiétude : 
							je m'en occupe pour vous, et vous les fait
							livrer à votre bureau.` )
			},

			// CASTING

			casting: {
				title: TextNode( 'Pièces de fonte' ),

				speech1: TextNode( `Votre projet est conçu et dessiné. Vous pouvez
							maintenant choisir la fonte à cire perdue via
							l'impression 3D pour accélerer la réalisation, 
							et vous assurer que le bijou fini sera au plus 
							proche de ce que nous avons conçu ensemble. 
							Armé de connaissances pratiques en fabrication
							de bijou, particulièrement dans le domaine
							du sertissage, je peux adapter votre design
							aux contraintes technique de l'impression 3D,
							de la fonte à cire perdue, et de toutes les
							étapes ultérieures de fabrication.` ),

				speech2: TextNode( `Si vous ne possédez pas votre propre imprimante 3D
							adaptée à la fonte à cire perdue, je me propose de 
							vous envoyer les fontes directement à votre atelier
							par transporteur sécurisé.` )
			},

			// DOCUMENTATION

			doc: {
				title: TextNode( 'Documentation' ),

				speech1: TextNode( `Une fois votre projet conçu, vous n'êtes pas
							laissé à vous-même. Je vous envoie toute la 
							documentation dont vous avez besoin pour 
							assembler les éléments, sertir les pierres, 
							et même communiquer sur votre bijou.` ),

				speech2: TextNode( `J'adapte la documentation à chaque projet,
							et répond à vos demandes spéciale :
							tableaux pour vos inventaires, documents pour
							vos présentations publiques ou privées, plans 
							quatre vues à gouacher... Vous n'avez qu'à
							demander.` )
			},

			// WEB DEVELOPMENT

			webdev: {
				title: TextNode( 'Développement web' ),

				speech1: TextNode( `Le développement web a été ma passion 
							ces dernières années, et j'offre mes services
							dans ce domaine. Mes compétences en joaillerie,
							modélisation 3D et web développement sont une
							combinaison rare et précieuse si vous êtes une
							entreprise de joaillerie avec un projet de service
							en ligne.` ),

				speech2: TextNode( `Ce site que vous visitez fut entièrement designé et
							programmé par moi-même avec les dernières
							technologies web (&#xA0;Node.js, Three.js, 
							Webpack, etc...&#xA0;). Les modèles 3D affichés
							dans chaque scène de la page d'accueil sont les miens,
							et on nécessité un traitement spécial pour le
							rendu en temps réel.` )
			},

			// SAMPLES

			samples: {
				title: TextNode( "Échantillons" ),

				renders: TextNode( 'Rendus Photoréalistes' ),

				cad: TextNode( 'Models 3D CAO' )
			},

			// CONTACT

			contact: {
				title: TextNode( 'Contact' ),

				speech: TextNode( `Je serai ravi de répondre à toute demande
							d'information, et de faire un devis ajusté
							à vos besoins. Si vous voulez discuter de
							vive voix, nous pouvons organiser une entrevue
							via Skype ou Zoom.` )
			}

		}

	}

}

//

const currentLanguage = 'french';

function getLanguageSet() {

	return texts[ currentLanguage ]

}

export default texts.english