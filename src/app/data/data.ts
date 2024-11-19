export interface Config {
	url: string;
}

export interface MenuItem {
	title: string;
	link: string;
}

export interface Menu {
	items: MenuItem[];
}

export interface CTA {
	title: string;
	link: string;
}

export interface Header {
	menu: Menu;
	cta: CTA[];
}
export interface Card {
	icon: string;
	title: string;
	description: string;
}
export interface Section {
	title?: string;
	description?: string | React.ReactNode;
	className?: string
	bg?: string;
	cards?: Card[];
	link?: {
		title: string;
		link: string;
	};
}

export interface IndexPage {
	screen: Section;
	block1: Section;
	block2: Section;
	block3: Section;
	block4: Section;
	block5: Section;
	block6: Section;
	block7: Section;
	block8: Section;
	block9: Section;
	block10: Section;
}
export interface Pages {
	index: IndexPage;
}
export interface MockData {
	config: Config;
	header: Header;
	footer: Record<string, unknown>; // Assuming footer is an empty object or can be expanded later
	pages: Pages;
}
export const mockData = {
	config: {
		url: "https://umaoxigen.com",
	},
	header: {
		menu: {
			items: [
				{
					title: "What is HBOT",
					link: "#"
				},
				{
					title: "Who uses HBOT",
					link: "#"
				},
				{
					title: "About NUMA",
					link: "#"
				},
				{
					title: "Pricing",
					link: "#"
				},
				{
					title: "Blog",
					link: "#"
				},
				{
					title: "FAQs",
					link: "#"
				},
				{
					title: "Contact",
					link: "#"
				}

			]
		},
		cta: [
			{
				title: "Online Booking",
				link: "#"
			},
			{
				title: "Call 0203 823 1212",
				link: "#"
			}
		]
	},
	footer: {

	},
	pages: {
		index: {
			screen: {
				bg: "img/index-bg.jpg"
			},
			block1: {
				title: "NUMA, Hyperbaric Oxygen Therapy",
				description: "NUMA is a doctor-led, CQC registered clinic that specializes in providing hyperbaric oxygen therapy, known for its medical grade chambers with exceptional patient care and state-of-the-art facilities."
			},
			block2: {
				bg: "img/block-2-bg.jpg"
			},
			block3: {
				title: "What is Hyperbaric Oxygen Therapy?",

				description: "Hyperbaric Oxygen Therapy (HBOT) is a painless and specialised oxygen therapy that involves breathing pure oxygen whilst in a hyperbaric chamber at increased atmospheric pressure (higher than normal air pressure). This allows blood plasma to absorb up to ten to fifteen times more oxygen at pressures greater than sea level.",
				link: {
					title: "ABOUT HBOT ",
					link: "#"
				}
			},
			block4: {
				title: "What to Expect?",
				video: {
					src: "https://www.youtube.com/watch?v=oqckCVLhGe4"
				}
			},
			block5: {
				title: "What you receive",
				textHtml: `<div class="num-content__text"><p><strong>Medical Expertise</strong>: NUMA is led by Dr. Nur Ozyilmaz, a former NHS Consultant with more than 25 years of medical experience.</p> <p><strong>Technical Excellence</strong>: Our resident engineer and technical team are dedicated to maintaining and enhancing our eight medical grade Hyperbaric Oxygen Chambers at the highest standards. To ensure an optimal experience for patients and maximise therapeutic effectiveness, we employ specialised BIBS masks only.</p> <p><strong>Regulated Service</strong>: We are licensed, accredited, and adhere to professional ethical codes and guidelines. We are CQC registered and proud members of Undersea and Hyperbaric Medical Society as well as the European Underwater and Baromedical Society.</p> <p><strong>Outstanding care</strong>: We treat our patients with utmost care, kindness, integrity, and compassion as shown by their testimonials. Our patient care managers will guide and support you throughout your treatment journey.</p></div>`
			},
			block6: {
				title: "Reviews"
			},
			block7 : {
				bg: "img/block7-bg.webp"
			},
			block8: {
				title: "Why Use Hyperbaric Oxygen Therapy?",
				cards: [
					{
						icon: `<svg xmlns="http://www.w3.org/2000/svg" width="163.473" height="130.232" viewBox="0 0 163.473 130.232"><path id="Path_209" data-name="Path 209" d="M329.2,3331.3c13.083-3.172,40.488-9.882,45.1-31.08s14.724-22.88,31.2-25.657,20.573-14.5,20.484-21.285-5.091-18.022-16.584-17.753-16.474,9.326-16.137,17.753,8.169,18.709,23.457,21.285,28.955,3.47,28.949,21.7,39.942,30.351,44.8,31.541c-5.455,3.349-13.526,1-19.681.819h-5.7c-5.212.333-27.426-3.548-32.8-28.4-1.177,15.915-3.509,41.614-22.878,40.844s-36.993-11.021-47.817-9.764-11.883,9.22-11.053,13.641,8.429,18.9,33.757,18.81,53.064-28.24,71.6-28,17.826,9.323,14.895,13.085-17.169,13.054-31.043,12.663-47.264-3.925-52.1-61.282" transform="translate(-327.993 -3234.52)" fill="none" stroke="#03414c" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" style="stroke-dasharray: 783.702px; stroke-dashoffset: 0px;"></path></svg>`,
						title: "Health and Wellbeing",
						description: "Assist with mental clarity, outer beauty and inner peace"
					},
					{
						icon: `<svg xmlns="http://www.w3.org/2000/svg" width="163.473" height="130.232" viewBox="0 0 163.473 130.232"><path id="Path_209" data-name="Path 209" d="M329.2,3331.3c13.083-3.172,40.488-9.882,45.1-31.08s14.724-22.88,31.2-25.657,20.573-14.5,20.484-21.285-5.091-18.022-16.584-17.753-16.474,9.326-16.137,17.753,8.169,18.709,23.457,21.285,28.955,3.47,28.949,21.7,39.942,30.351,44.8,31.541c-5.455,3.349-13.526,1-19.681.819h-5.7c-5.212.333-27.426-3.548-32.8-28.4-1.177,15.915-3.509,41.614-22.878,40.844s-36.993-11.021-47.817-9.764-11.883,9.22-11.053,13.641,8.429,18.9,33.757,18.81,53.064-28.24,71.6-28,17.826,9.323,14.895,13.085-17.169,13.054-31.043,12.663-47.264-3.925-52.1-61.282" transform="translate(-327.993 -3234.52)" fill="none" stroke="#03414c" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" style="stroke-dasharray: 783.702px; stroke-dashoffset: 0px;"></path></svg>`,
						title: "Sports Performance",
						description: "Bounce back from injury and fast-track your training"
					},
					{
						icon: `<svg xmlns="http://www.w3.org/2000/svg" width="163.473" height="130.232" viewBox="0 0 163.473 130.232"><path id="Path_209" data-name="Path 209" d="M329.2,3331.3c13.083-3.172,40.488-9.882,45.1-31.08s14.724-22.88,31.2-25.657,20.573-14.5,20.484-21.285-5.091-18.022-16.584-17.753-16.474,9.326-16.137,17.753,8.169,18.709,23.457,21.285,28.955,3.47,28.949,21.7,39.942,30.351,44.8,31.541c-5.455,3.349-13.526,1-19.681.819h-5.7c-5.212.333-27.426-3.548-32.8-28.4-1.177,15.915-3.509,41.614-22.878,40.844s-36.993-11.021-47.817-9.764-11.883,9.22-11.053,13.641,8.429,18.9,33.757,18.81,53.064-28.24,71.6-28,17.826,9.323,14.895,13.085-17.169,13.054-31.043,12.663-47.264-3.925-52.1-61.282" transform="translate(-327.993 -3234.52)" fill="none" stroke="#03414c" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" style="stroke-dasharray: 783.702px; stroke-dashoffset: 0px;"></path></svg>`,
						title: "Therapeutic Support",
						description: "Support recovery from chronic conditions in conjunction with conventional medical therapies"
					}
				],
				link: {
					title: "LEARN MORE",
					link: "#"
				}
			},
			block9: {
				title: "Testimonials",
				cards: [
					{
						video: {
							src: "https://www.youtube.com/watch?v=J-6gadz24f8"
						}
					},
					{
						video: {
							src: "https://www.youtube.com/watch?v=-uaEGT5dRQU"
						}
					}
				]
			},
			block10: {
				title: "NUMA Partners & Membership",
				cards: [
					{
						img: {
							src: "img/block10-card1.png"
						}
					},
					{
						img: {
							src: "img/block10-card2.png"
						}
					},
					{
						img: {
							src: "img/block10-card3.png"
						}
					},

				]
			}
		}
	}
}
