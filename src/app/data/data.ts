import { SectionType } from "@/components/Section/Section";

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
				type: SectionType.filled,
				className: "why",
				title: "Why Use Hyperbaric Oxygen Therapy?",
				cards: [
					{
						icon: `<svg xmlns="http://www.w3.org/2000/svg" width="163.473" height="130.232" viewBox="0 0 163.473 130.232"><path id="Path_209" data-name="Path 209" d="M329.2,3331.3c13.083-3.172,40.488-9.882,45.1-31.08s14.724-22.88,31.2-25.657,20.573-14.5,20.484-21.285-5.091-18.022-16.584-17.753-16.474,9.326-16.137,17.753,8.169,18.709,23.457,21.285,28.955,3.47,28.949,21.7,39.942,30.351,44.8,31.541c-5.455,3.349-13.526,1-19.681.819h-5.7c-5.212.333-27.426-3.548-32.8-28.4-1.177,15.915-3.509,41.614-22.878,40.844s-36.993-11.021-47.817-9.764-11.883,9.22-11.053,13.641,8.429,18.9,33.757,18.81,53.064-28.24,71.6-28,17.826,9.323,14.895,13.085-17.169,13.054-31.043,12.663-47.264-3.925-52.1-61.282" transform="translate(-327.993 -3234.52)" fill="none" stroke="#03414c" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={strokeDasharray: "783.702px", strokeDashoffset: "0px"}></path></svg>`,
						title: "Health and Wellbeing",
						description: "Assist with mental clarity, outer beauty and inner peace"
					},
					{
						icon: `<svg xmlns="http://www.w3.org/2000/svg" width="126.333" height="111.427" viewBox="0 0 126.333 111.427"><path id="Path_332" data-name="Path 332" d="M1422.941,190.919c-7.292,10.209-14.584,12.4-24.793,12.4S1377,193.107,1377,179.252s12.4-24.794,23.335-24.794,25.523,10.209,25.523,26.981c0,3.281-7.657,1.094-12.761-.365s-12.4-1.458-9.48-7.292,11.668-21.877,19.689-24.794a54.086,54.086,0,0,1,23.335-2.917c6.563.729,14.584,0,14.584,3.646s-21.877,31.357-26.981,32.086,8.021-20.418,8.751-30.627,2.917-13.126-8.021-15.314-27.71.729-26.252-13.126,11.668-19.689,26.252-19.689c23.335.729,18.96,16.043,29.9,16.772,7.292.729,9.48-5.834,8.751-10.209s-6.563-13.855-14.584-13.126-5.1,14.584-5.834,21.877a132.425,132.425,0,0,0-.729,14.584c0,2.917.729,8.021,8.75,8.751a132.386,132.386,0,0,0,14.584.729c3.646,0,7.292-2.188,6.563-5.1s-5.1-4.375-6.563-3.646-5.834,2.917-6.563,11.668.729,9.48.729,9.48a19.347,19.347,0,0,0,8.021,1.458c5.1,0,23.335,5.1,23.335,24.794S1484.56,205.869,1478,205.869c-10.938,0-26.981-6.563-26.981-26.252s9.48-17.5,11.668-17.5,13.855,8.021,13.855,18.231" transform="translate(-1376 -95.442)" fill="none" stroke="#03414c" stroke-miterlimit="10" stroke-width="2" style="stroke-dasharray: 766.267px; stroke-dashoffset: 0px;"></path></svg>`,
						title: "Sports Performance",
						description: "Bounce back from injury and fast-track your training"
					},
					{
						icon: `<svg xmlns="http://www.w3.org/2000/svg" width="114.566" height="136.355" viewBox="0 0 114.566 136.355"><g id="Group_121" data-name="Group 121" transform="translate(-121.757 -120.039)"><path id="Path_333" data-name="Path 333" d="M174.651,133.814c7.822,7.391-11.568,11.961-6.807,0s31.279-8.15,27.834,7.919-1.427,51.4-40.481,53.776-32.466-33.288-31.336-62.22c1.077-9.165,15.778-19.515,23.914-4.621s-16.692,8.781-5.632,0" transform="translate(0 0)" fill="none" stroke="#03414c" stroke-miterlimit="10" stroke-width="2" style="stroke-dasharray: 278.713px; stroke-dashoffset: 0px;"></path><path id="Path_334" data-name="Path 334" d="M154.792,194.583s-6.149,17.2-1,34.533,12.726,29.37,27.667,24.623,22.856-56.778,39.619-46.445,17.268,28.976,8.642,33.536c-7.222,3.818-20.935,2.213-19.208-12.479,1.077-9.165,13.142-12.392,13.142-12.392" transform="translate(0.074 0.613)" fill="none" stroke="#03414c" stroke-miterlimit="10" stroke-width="2" style="stroke-dasharray: 278.713px; stroke-dashoffset: 0px;"></path><path id="Path_335" data-name="Path 335" d="M124.381,180.143s6.9-7.675,14.216-6.815c4.951.582,8.98,6.063,11.325,10.141a3.541,3.541,0,0,0,5.687.684,47.586,47.586,0,0,1,6.712-6.177c4.863-3.145,14.186,1.668,16.978,8.5" transform="translate(1.346 -0.983)" fill="none" stroke="#03414c" stroke-miterlimit="10" stroke-width="2" style="stroke-dasharray: 278.713px; stroke-dashoffset: 0px;"></path></g></svg>`,
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
				type: SectionType.filled,
				className: "logos",
				cards: [
					{
						img: {
							src: "/img/block10-card1.png"
						}
					},
					{
						img: {
							src: "/img/block10-card2.png"
						}
					},
					{
						img: {
							src: "/img/block10-card3.png"
						}
					},

				]
			}
		}
	}
}
