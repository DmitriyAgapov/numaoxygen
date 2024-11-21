import { SectionType } from "@/components/Section/Section";
export interface CardProps extends Section {
	textHtml: React.ReactNode;
	video: {
		src: string
	};
	icon?: React.ReactNode;
	title: string;
	img: {
		src: string
		alt: string
	}
	description: string;
	type: string
}
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
export type Card = CardProps
export interface Section {
	title?: string;
	description?: string | React.ReactNode;
	className?: string
	bg?: string;
	img?: {
		src: string
		alt: string
	}
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
		address: "6 York Street, London, W1U 6QD",
		phone: "0203 823 1212",
		email: "info@numaoxygen.com",
		disclaimer: "<strong>Disclaimer:</strong> While medical research supports the effectiveness of Hyperbaric Oxygen Therapy (HBOT) in aiding the healing process for various conditions, individual results may vary, and outcomes are not guaranteed. HBOT may not be suitable for everyone, and its application may not be appropriate for your specific condition. We strongly recommend consulting with your healthcare provider to discuss all treatment options, along with their associated risks and benefits, to determine whether HBOT is right for you. Please note that Hyperbaric Oxygen Therapy is not intended to treat disease, disorder, or injury directly. It is offered as a complementary treatment to support recovery, alleviate symptoms, and promote overall wellbeing."
	},
	header: {
		menu: {
			items: [
				{
					title: "What is HBOT",
					link: "hyperbaric-oxygen-therapy"
				},
				{
					title: "Who uses HBOT",
					link: "resources"
				},
				{
					title: "About NUMA",
					link: "about"
				},
				{
					title: "Pricing",
					link: "Pricing"
				},
				{
					title: "Blog",
					link: "blog"
				},
				{
					title: "|"
				},
				{
					title: "FAQs",
					link: "faq"
				},
				{
					title: "Contact",
					link: "contacts"
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
		menu: {
			items: [
				{
					title: "About HBOT",
					link: "#"
				},
				{
					title: "Who uses HBOT?",
					link: "#"
				},
				{
					title: "Giving Feedback",
					link: "#"
				},
				{
					title: "Research and Studies",
					link: "#"
				},
				{
					title: "FAQ",
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
					title: "About NUMA",
					link: "#"
				},
				{
					title: "Contact Us",
					link: "#"
				}

			]
		},
		bottomMenu: {
			items: [
				{
					title: "Privacy Policy",
					link: "#"
				},
				{
					title: "Cookie Policy",
					link: "#"
				},
				{
					title: "Terms & Conditions",
					link: "#"
				}

			]
		}
	},
	pages: {
		index: {
			screen: {
				bg: "/img/index-bg.jpg"
			},
			block1: {
				title: "NUMA: Hyperbaric Oxygen Therapy",
				description: "NUMA is a CQC-registered clinic led by experienced doctors, specializing in Hyperbaric Oxygen Therapy (HBOT). Known for its state-of-the-art facilities and exceptional patient care, NUMA uses medical-grade chambers to provide effective and safe treatment."
			},
			block2: {
				bg: "/img/block-2-bg.jpg"
			},
			block3: {
				title: "What is Hyperbaric Oxygen Therapy?",
				description: "Hyperbaric Oxygen Therapy (HBOT) is a non-invasive, specialized treatment where patients breathe 100% oxygen inside a hyperbaric chamber, which is pressurized to levels higher than normal air pressure. This increased pressure allows the blood plasma to absorb significantly more oxygen—up to 10-15 times the normal amount—promoting healing and recovery.",
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
				title: "What You Receive at NUMA",
				textHtml: `<div class="num-content__text"><p><strong>Medical Expertise</strong>: NUMA is led by Dr. Nur Ozyilmaz, a former NHS Consultant with over 25 years of medical experience, ensuring you receive the highest standard of care.</p> <p><strong>Technical Excellence</strong>: Our skilled engineering team is dedicated to maintaining and optimizing our eight medical-grade Hyperbaric Oxygen Chambers. To provide the best possible treatment, we use specialized BIBS masks, ensuring both patient comfort and maximum therapeutic benefit.</p> <p><strong>Regulated Service</strong>: NUMA is fully licensed, accredited, and adheres to the highest professional ethical standards. We are CQC registered and proud members of the Undersea and Hyperbaric Medical Society (UHMS) and the European Underwater and Baromedical Society (EUROBAC).</p> <p><strong>Outstanding care</strong>:At NUMA, we prioritize compassionate and personalized care. Our patient care managers are committed to supporting you throughout your entire treatment journey, ensuring a positive and seamless experience, as reflected in our patient testimonials.</p></div>`
			},
			block6: {
				title: "Reviews"
			},
			block7 : {
				bg: "/img/block7-bg.webp"
			},
			block8: {
				type: SectionType.filled,
				className: "why",
				title: "Why Choose Hyperbaric Oxygen Therapy?",
				cards: [
					{
						icon: `<svg xmlns="http://www.w3.org/2000/svg" width="163.473" height="130.232" viewBox="0 0 163.473 130.232"><path id="Path_209" data-name="Path 209" d="M329.2,3331.3c13.083-3.172,40.488-9.882,45.1-31.08s14.724-22.88,31.2-25.657,20.573-14.5,20.484-21.285-5.091-18.022-16.584-17.753-16.474,9.326-16.137,17.753,8.169,18.709,23.457,21.285,28.955,3.47,28.949,21.7,39.942,30.351,44.8,31.541c-5.455,3.349-13.526,1-19.681.819h-5.7c-5.212.333-27.426-3.548-32.8-28.4-1.177,15.915-3.509,41.614-22.878,40.844s-36.993-11.021-47.817-9.764-11.883,9.22-11.053,13.641,8.429,18.9,33.757,18.81,53.064-28.24,71.6-28,17.826,9.323,14.895,13.085-17.169,13.054-31.043,12.663-47.264-3.925-52.1-61.282" transform="translate(-327.993 -3234.52)" fill="none" stroke="#03414c" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={strokeDasharray: "783.702px", strokeDashoffset: "0px"}></path></svg>`,
						title: "Health and Wellbeing",
						description: " Enhance mental clarity, support your outer beauty, and achieve a sense of inner peace."
					},
					{
						icon: `<svg xmlns="http://www.w3.org/2000/svg" width="126.333" height="111.427" viewBox="0 0 126.333 111.427"><path id="Path_332" data-name="Path 332" d="M1422.941,190.919c-7.292,10.209-14.584,12.4-24.793,12.4S1377,193.107,1377,179.252s12.4-24.794,23.335-24.794,25.523,10.209,25.523,26.981c0,3.281-7.657,1.094-12.761-.365s-12.4-1.458-9.48-7.292,11.668-21.877,19.689-24.794a54.086,54.086,0,0,1,23.335-2.917c6.563.729,14.584,0,14.584,3.646s-21.877,31.357-26.981,32.086,8.021-20.418,8.751-30.627,2.917-13.126-8.021-15.314-27.71.729-26.252-13.126,11.668-19.689,26.252-19.689c23.335.729,18.96,16.043,29.9,16.772,7.292.729,9.48-5.834,8.751-10.209s-6.563-13.855-14.584-13.126-5.1,14.584-5.834,21.877a132.425,132.425,0,0,0-.729,14.584c0,2.917.729,8.021,8.75,8.751a132.386,132.386,0,0,0,14.584.729c3.646,0,7.292-2.188,6.563-5.1s-5.1-4.375-6.563-3.646-5.834,2.917-6.563,11.668.729,9.48.729,9.48a19.347,19.347,0,0,0,8.021,1.458c5.1,0,23.335,5.1,23.335,24.794S1484.56,205.869,1478,205.869c-10.938,0-26.981-6.563-26.981-26.252s9.48-17.5,11.668-17.5,13.855,8.021,13.855,18.231" transform="translate(-1376 -95.442)" fill="none" stroke="#03414c" stroke-miterlimit="10" stroke-width="2" style="stroke-dasharray: 766.267px; stroke-dashoffset: 0px;"></path></svg>`,
						title: "Sports Performance",
						description: "Speed up recovery from injury and optimize your training for peak performance."
					},
					{
						icon: `<svg xmlns="http://www.w3.org/2000/svg" width="114.566" height="136.355" viewBox="0 0 114.566 136.355"><g id="Group_121" data-name="Group 121" transform="translate(-121.757 -120.039)"><path id="Path_333" data-name="Path 333" d="M174.651,133.814c7.822,7.391-11.568,11.961-6.807,0s31.279-8.15,27.834,7.919-1.427,51.4-40.481,53.776-32.466-33.288-31.336-62.22c1.077-9.165,15.778-19.515,23.914-4.621s-16.692,8.781-5.632,0" transform="translate(0 0)" fill="none" stroke="#03414c" stroke-miterlimit="10" stroke-width="2" style="stroke-dasharray: 278.713px; stroke-dashoffset: 0px;"></path><path id="Path_334" data-name="Path 334" d="M154.792,194.583s-6.149,17.2-1,34.533,12.726,29.37,27.667,24.623,22.856-56.778,39.619-46.445,17.268,28.976,8.642,33.536c-7.222,3.818-20.935,2.213-19.208-12.479,1.077-9.165,13.142-12.392,13.142-12.392" transform="translate(0.074 0.613)" fill="none" stroke="#03414c" stroke-miterlimit="10" stroke-width="2" style="stroke-dasharray: 278.713px; stroke-dashoffset: 0px;"></path><path id="Path_335" data-name="Path 335" d="M124.381,180.143s6.9-7.675,14.216-6.815c4.951.582,8.98,6.063,11.325,10.141a3.541,3.541,0,0,0,5.687.684,47.586,47.586,0,0,1,6.712-6.177c4.863-3.145,14.186,1.668,16.978,8.5" transform="translate(1.346 -0.983)" fill="none" stroke="#03414c" stroke-miterlimit="10" stroke-width="2" style="stroke-dasharray: 278.713px; stroke-dashoffset: 0px;"></path></g></svg>`,
						title: "Therapeutic Support",
						description: "Aid recovery from chronic conditions when used alongside traditional medical treatments."
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
			},
			block11 : {
				bg: "/img/block-11-bg.jpg"
			},
		},
		'hyperbaric-oxygen-therapy': {
			block1: {
				title: "What is Hyperbaric Oxygen Therapy?",
				textHtml: `<div> <p>Hyperbaric Oxygen Therapy (HBOT) is a specialized, non-invasive treatment in which patients inhale 100% oxygen inside a hyperbaric chamber that is pressurized to levels higher than normal atmospheric pressure. This therapy works by increasing the amount of oxygen delivered to tissues throughout the body, which can help with healing and recovery.</p> <h3>Key Mechanisms of Action:</h3> <ul> <li><strong>Hyperoxygenation:</strong>Under increased pressure, breathing pure oxygen enhances the oxygen concentration in the bloodstream, lymph, and cerebrospinal fluid, raising oxygen levels by up to 1200% compared to normal breathing at sea level.</li> <li><strong>Anti-inflammatory:</strong> HBOT reduces inflammation by modulating immune responses. It decreases the release of pro-inflammatory cytokines (such as IL-1, IL-6, and TNF-α) and increases the anti-inflammatory cytokine IL-10.</li>  <li><strong>Reduction of swelling:</strong>The higher oxygen levels cause blood vessels to constrict temporarily, helping to reduce swelling without compromising oxygen delivery to tissues.</li> <li><strong>Stem cell mobilisation:</strong> HBOT has been shown to significantly increase the concentration of circulating stem cells, which play a key role in tissue repair and regeneration.</li> <li><strong>Angiogenesis:</strong>Hyperbaric oxygen therapy stimulates the formation of new blood vessels (angiogenesis), aiding in the repair and recovery of damaged tissues.</li> <li><strong>Antimicrobial mechanisms:</strong> HBOT improves white blood cell function, enhances antibiotic effectiveness by facilitating penetration through bacterial membranes, and helps to limit toxin release in certain infections.</li> <li><strong>Regeneration mechanisms:</strong> HBOT accelerates the recovery of damaged tissues, including bone, collagen, ligaments, and tendons, promoting overall healing and regeneration.</li> </ul><h3>Safety and Considerations:</h3><p>When administered correctly, it is generally considered safe and well tolerated. However, like any form of therapy, there are rare but potential risks involved and it may not be suitable for every individual or health condition.</p> <p>Therefore, it is important for hyperbaric oxygen therapy to be administered by qualified healthcare providers under the supervision of an experienced medical doctor with specialised knowledge in this area and a thorough understanding of its uses, limitations, and potential side effects.</p></div>`
			},
			block7 : {
				bg: "/img/block7-bg.webp"
			},
		},
		resources: {
			block1: {
				title: "Who Uses Hyperbaric Oxygen Therapy (HBOT)?",
				textHtml: `<p>At NUMA, we offer Hyperbaric Oxygen Therapy to individuals seeking therapeutic benefits for a range of conditions. Common reasons people seek HBOT include:</p> <ul> <li aria-level="1">General Health and Wellness: Healthy individuals looking to improve overall wellness through the therapeutic effects of oxygen.</li> <li aria-level="1">Sports Performance &amp; Recovery: Athletes and active individuals using HBOT to enhance performance and speed up recovery from injuries.</li> <li aria-level="1">Post-Surgery Healing: Supporting recovery after surgery and promoting faster wound healing.</li> <li aria-level="1">Traumatic Brain Injury &amp; Concussions: Assisting recovery and cognitive function following brain injuries, including concussions.</li> <li aria-level="1">Sensorineural Hearing Loss: Helping those with hearing loss caused by nerve damage.</li> <li aria-level="1">Inflammatory Bowel Disease: Supporting conditions like Crohn's disease and ulcerative colitis.</li> <li aria-level="1">Chronic Fatigue &amp; Fibromyalgia: Managing symptoms of conditions such as fibromyalgia, chronic fatigue syndrome (ME), and other related disorders.</li> <li aria-level="1">Stroke Rehabilitation: Promoting recovery and rehabilitation after a stroke.</li> <li aria-level="1">Lyme Disease: Aiding treatment for Lyme disease and its related symptoms.</li> <li aria-level="1">Interstitial Cystitis: Helping individuals with this painful bladder condition.</li> <li aria-level="1">Chronic Inflammatory Conditions: Offering relief for conditions marked by persistent inflammation.</li> <li aria-level="1">Delayed Radiation Injuries: Supporting recovery from soft tissue and bone necrosis following radiation therapy.</li> </ul> <h3>Global Indications for Hyperbaric Oxygen Therapy</h3> <p>In 2016, the European Committee for Hyperbaric Medicine (ECHM) updated the list of approved indications for HBOT. The Undersea and Hyperbaric Medical Society (UHMS) also publishes a comprehensive list of globally recognized conditions for which HBOT is used. These include:</p> <ul> <li aria-level="1">Air or Gas Embolism</li> <li aria-level="1">Carbon Monoxide Poisoning</li> <li aria-level="1">Gas Gangrene</li> <li aria-level="1">Compartment Syndrome</li> <li aria-level="1">Crush Injury</li> <li aria-level="1">Traumatic Ischemias</li> <li aria-level="1">Decompression Sickness (The Bends)</li> <li aria-level="1">Arterial Insufficiency</li> <li aria-level="1">Severe Anemia</li> <li aria-level="1">Intracranial Abscess</li> <li aria-level="1">Necrotizing Soft Tissue Infection</li> <li aria-level="1">Refractory Osteomyelitis</li> <li aria-level="1">Delayed Radiation Injury (Soft Tissue and Bone Necrosis)</li> <li aria-level="1">Compromised Grafts and Flaps</li> <li aria-level="1">Acute Thermal Burns</li> <li aria-level="1">Sudden Idiopathic Sensorineural Hearing Loss</li> </ul> <h3>NHS Coverage in the UK</h3> <p>In the UK, the NHS currently funds Hyperbaric Oxygen Therapy (HBOT) for the following conditions:</p> <ul> <li aria-level="1">Decompression Illness</li> <li aria-level="1">Arterial Gas Embolism</li> </ul><h3>Important Legal Disclaimer:</h3><p>In compliance with UK and EU regulations, we wish to clarify that Hyperbaric Oxygen Therapy is not intended to cure or prevent any disease. The information on this website&mdash;including research, case studies, articles, and other content&mdash;is for educational purposes only. Please note that research findings may vary between individuals and are not universally applicable. This website is not a substitute for professional medical advice or treatment. For any diagnosis or treatment, we recommend consulting with a qualified healthcare provider.</p>`
			},
			block11 : {
				bg: "/img/block-11-bg.jpg"
			},
		},
		about: {
			screen: {
				bg: "/img/about-bg.jpg"
			},
			block1: {
				type: SectionType.filled,
				className: "bg-fontColor",
				cards: [
					{
						className: "*:text-white",
						textHtml: `<div><blockquote>At NUMA, we provide Hyperbaric Oxygen Therapy at the highest standards, blending integrity, honesty, and compassion into every aspect of our care. We are privileged to support your health and recovery, <strong>one breath at a time.</strong></blockquote><cite>- Dr. Nur Ozyilmaz MD, Founder, NUMA</cite></div>`
					},
					{
						textHtml: `<p>Located in the heart of London's Marylebone, NUMA is a leading CQC-registered clinic specializing in Hyperbaric Oxygen Therapy. Our clinic is led by a highly qualified team using advanced hyperbaric chambers, and we take pride in offering expert-led, holistic care for each patient. Your wellbeing is our top priority.</p>`
					}
				]
			},
			block2: {
				className: "features",
				img: {
					className: "featured-img",
					src: "/img/about-features1.jpg",
					alt: "",
					width: 1920,
					height: 1500
				},
				cards: [
					{
						title: "Mission",
						description: "Our mission is to maximize our patients' health-span and wellbeing through exceptional, medical-led, research-based hyperbaric oxygen medicine."
					},
					{
						title: "Vision",
						description: "Our vision is to become an international center of excellence, providing the highest quality hyperbaric oxygen treatments to help individuals reach their full potential."
					},
					{
						title: "Values",
						description: "Excellence, Kindness, Integrity, Compassion"
					}
				]
			},
			block3: {
				title: "About Dr. Nur Ozyilmaz",
				textHtml: `<p>Dr. Nur Ozyilmaz is a former NHS Consultant with over 25 years of experience in medicine, trained in the UK. After six years in emergency medicine, she specialized in paediatrics and nephrology, receiving training at prestigious institutions such as King’s College, Great Ormond Street, and St Thomas' Hospital in London. Dr. Nur later pursued further postgraduate studies in regenerative and integrative medicine in the USA, developing a special interest in Hyperbaric Oxygen Therapy.</p><p>Her diverse expertise in both conventional and integrative medicine makes Dr. Nur uniquely qualified to offer comprehensive, patient-centered care. By combining the best methodologies from both disciplines, she incorporates hyperbaric oxygen therapy into her treatments to deliver optimal outcomes for her patients.</p>`
			},
			block4: {
				type: SectionType.filled,
				title: "NUMA’s Journey",
				textHtml: `<div><p class="c0">The inspiration for NUMA came from a deeply personal experience. At age four, I suffered an accident and subsequent surgery that left a lasting impact on my health. The care and compassion I received during my recovery inspired me to pursue a career in medicine. I soon realized that there is no greater kindness than easing pain and helping people heal.</p><p class="c0"><span>While my career in the NHS was thriving, my own health was deteriorating due to chronic migraines caused by a head injury I sustained in my teens. Despite access to the best specialists and treatments in the UK, no one could alleviate my symptoms.</span></p><p class="c0"><span>Determined to find a solution, I sought alternative treatments beyond conventional medicine. I attended global conferences, consulted with experts, and explored cutting-edge approaches in nutrition, acupuncture, regenerative medicine, and hyperbaric oxygen therapy. Over time, I experienced miraculous improvements in my health, and my migraines disappeared.</span></p><p class="c0"><span>This journey taught me that while conventional medicine is crucial for many, patients with chronic conditions often need a more holistic, personalized approach. Motivated by my own experience, I decided to set up an integrative health clinic to help others facing similar struggles.</span></p><p class="c0"><span>In 2017, I met Jacques, a successful businessman and philanthropist, who came to me seeking answers for the complex medical issues that had affected him after a traumatic motorbike accident. After enduring a series of medical setbacks, including encephalitis, and being told by doctors around the world that there were no further options, Jacques was at a crossroads. By incorporating hyperbaric oxygen therapy into his treatment plan, along with other therapies, Jacques began his recovery journey.</span></p><p class="c0"><span>Over two years, Jacques and I worked closely together, sharing our values and passion for helping others. After many conversations, we realized our shared vision for a clinic that combines the best of conventional and integrative medicine. This is how NUMA was born.</span></p><p class="c0"><span>At NUMA, we understand the profound impact that chronic illness can have on people's lives. We recognize the importance of using the best science and the latest research, but we also know that every patient is unique and deserves personalized care. We take the time to understand each patient's needs, challenges, and goals, so we can provide tailored solutions to help them achieve the life they deserve.</span></p><p class="c0"><span>We feel truly honored to be a part of your journey to health and happiness.</span></p><p class="c0"><span>— </span><span>Dr. Nur Ozyilmaz MD, Founder, NUMA</span></p></div>`
			},
			block11 : {
				bg: "/img/about-last.webp"
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
			},
		},
		faq: {
			screen: {
				type: SectionType.page,
				title: "Frequently Asked Questions (FAQ)"
			},
			questions: {
				cards: [
					{
						title: "What is Hyperbaric Oxygen Therapy (HBOT)?",
						type: "faq",
						textHtml: `<p>Hyperbaric Oxygen Therapy (HBOT) is a specialized, painless treatment that involves breathing 100% oxygen in a pressurized hyperbaric chamber. The elevated pressure increases the amount of oxygen in your blood and other bodily fluids, allowing for healing and therapeutic effects.</p>`
					},
					{
						title: "How does HBOT work?",
						type: "faq",
						textHtml: `<p><span>&nbsp;HBOT works through several mechanisms that enhance the body’s ability to heal:</span></p><ul><li ><span>Hyperoxygenation:</span><span>&nbsp;Breathing oxygen-rich air under pressure can increase oxygen levels in your bloodstream, lymph, and cerebrospinal fluid by up to 1200%, compared to normal air.</span></li><li ><span>Anti-inflammatory:</span><span>&nbsp;HBOT reduces inflammation by influencing immune-modulatory cytokines, lowering pro-inflammatory cytokines (like IL-1, IL-6, TNF-α) and increasing anti-inflammatory cytokines (like IL-10).</span></li><li ><span>Reduction of Swelling:</span><span>&nbsp;Increased oxygen levels cause blood vessels to constrict, reducing swelling without impairing oxygen delivery.</span></li><li ><span>Stem Cell Mobilization:</span><span>&nbsp;HBOT increases the concentration of circulating stem cells, which help repair damaged tissues.</span></li><li ><span>Angiogenesis:</span><span>&nbsp;HBOT stimulates the formation of new blood vessels, supporting tissue repair and healing.</span></li><li ><span>Antimicrobial Effects:</span><span>&nbsp;HBOT boosts white blood cell performance, enhances antibiotic penetration through bacterial membranes, and restricts toxin release during infections.</span></li><li ><span>Regeneration:</span><span>&nbsp;It accelerates the healing of bones, collagen, ligaments, and tendons.</span></li></ul>`
					},
					{
						title: "Is Hyperbaric Oxygen Therapy right for you?",
						type: "faq",
						textHtml: `<p>At NUMA, we offer a consultant-led service, where each new patient undergoes a face-to-face assessment to determine if HBOT is appropriate. This allows our physician to assess your medical history and current condition to design a personalized treatment plan based on the latest clinical research.</p>`
					},
					{
						title: "What are the typical reasons for people to visit NUMA?",
						type: "faq",
						textHtml: `<p class="c1">&nbsp;Patients visit NUMA for a variety of conditions, including:</p><ul><li class="c0 li-bullet-0"><span class="c3">General Health &amp; Wellness:</span><span class="c1">&nbsp;Healthy individuals seeking therapeutic benefits.</span></li><li class="c0 li-bullet-0"><span class="c6 c3">Sports Performance &amp; Injury Recovery</span></li><li class="c0 li-bullet-0"><span class="c6 c3">Post-Surgical Recovery &amp; Wound Healing</span></li><li class="c0 li-bullet-0"><span class="c6 c3">Concussions &amp; Traumatic Brain Injuries</span></li><li class="c0 li-bullet-0"><span class="c6 c3">Sensorineural Hearing Loss</span></li><li class="c0 li-bullet-0"><span class="c3">Inflammatory Bowel Diseases</span><span class="c1">&nbsp;(Crohn’s disease, Ulcerative Colitis)</span></li><li class="c0 li-bullet-0"><span class="c6 c3">Fibromyalgia, ME, &amp; Chronic Fatigue Syndrome</span></li><li class="c0 li-bullet-0"><span class="c6 c3">Stroke Rehabilitation</span></li><li class="c0 li-bullet-0"><span class="c6 c3">Lyme Disease</span></li><li class="c0 li-bullet-0"><span class="c6 c3">Interstitial Cystitis</span></li><li class="c0 li-bullet-0"><span class="c6 c3">Chronic Inflammatory Conditions</span></li><li class="c0 li-bullet-0"><span class="c3">Delayed Radiation Injuries</span><span class="c1">&nbsp;(Soft Tissue and Bone Necrosis)</span></li></ul>`
					},
					{
						title: "What happens during a Hyperbaric Oxygen Therapy treatment?",
						type: "faq",
						textHtml: `<p>A typical HBOT session involves several stages:</p><ol class="c5 lst-kix_fvpsop1wtbp5-0 start" start="1"><li class="c0 li-bullet-0"><span class="c3">Compression:</span><span class="c1">&nbsp;The chamber is pressurized to the prescribed level (commonly 2.0 ATA, the equivalent of 33 feet underwater).</span></li><li class="c0 li-bullet-0"><span class="c3">Oxygen Breathing:</span><span class="c1">&nbsp;Patients breathe near 100% oxygen through a BIBS mask while the chamber is maintained at pressure.</span></li><li class="c0 li-bullet-0"><span class="c3">Breaks:</span><span class="c1">&nbsp;Patients receive breaks for air during the session, allowing them to breathe medical-grade air and remove the mask.</span></li><li class="c0 li-bullet-0"><span class="c3">Decompression:</span><span class="c1">&nbsp;The pressure is gradually reduced at the end of the session, and the treatment concludes.</span></li></ol>`
					},
					{
						title: "What does Hyperbaric Oxygen Therapy feel like?",
						type: "faq",
						textHtml: `<p class="c1">&nbsp;At the start of the session, you may feel a mild fullness in your ears, similar to what you experience during a flight’s takeoff or landing. This sensation lasts for about 5-10 minutes. Once the target pressure is reached, you can relax and breathe naturally through the mask.</p><p class="c1">During decompression, you may feel a slight popping sensation in your ears as the pressure is reduced. Many patients find the sessions to be calming and often use the time to relax or nap.</p>`
					},
					{
						title: "Is Hyperbaric Oxygen Therapy Painful?",
						type: "faq",
						textHtml: `<p>Most patients find HBOT sessions relaxing and calming. The only discomfort typically felt is a mild ear pressure sensation, which can be easily managed with the help of our experienced technicians. If you feel discomfort during the session, please let the operator know, and they will assist you in equalizing the pressure in your ears.</p>`
					},
					{
						title: "Why do I have to have an initial consultation?",
						type: "faq",
						textHtml: `<p>The initial consultation is an essential step in determining if HBOT is suitable for you. During this face-to-face assessment, our physician will review your medical history, understand your health condition, and design a personalized treatment plan tailored to your needs.</p>`
					},
					{
						title: "How long does a treatment last?",
						type: "faq",
						textHtml: `<p>A typical HBOT treatment lasts between 60 to 90 minutes, depending on the condition being treated.</p>`
					},
					{
						title: "How many treatments will I need, and how often?",
						type: "faq",
						textHtml: `<p>The number and frequency of treatments will vary based on the condition being treated. Some conditions may require just five sessions, while others might need 20-30 treatments over several weeks. For many conditions, treatments are typically scheduled once a day, Monday to Friday, for about four to six weeks.</p>`
					},
					{
						title: "What type of chamber does NUMA use?",
						type: "faq",
						textHtml: `<p>NUMA uses Medical Grade Monoplace Hyperbaric Chambers, designed to accommodate a single patient at a time. These chambers are pressurized with medical-grade air, and oxygen is delivered via a special BIBS mask. The chambers have a clear acrylic window for easy monitoring, and patients can communicate with the chamber operator through an intercom system.</p>`
					},
					{
						title: "Is HBOT safe?",
						type: "faq",
						textHtml: `<p> When administered properly, HBOT is generally considered safe and well-tolerated. However, as with any medical treatment, there are some risks involved. It is important that HBOT is performed by trained healthcare providers under the supervision of an experienced doctor who understands the treatment’s benefits, limitations, and potential side effects.</p><p>During your initial consultation, the physician will discuss any specific risks relevant to your health and treatment plan.</p>`
					},
					{
						title: "What are the side effects of HBOT?",
						type: "faq",
						textHtml: `<p>While HBOT is typically very safe, there are a few rare side effects, including:</p><ul class="c5 lst-kix_rlbns7r1998o-0 start"><li class="c0 li-bullet-0"><span class="c6 c3">Middle ear injury (Barotrauma)</span></li><li class="c0 li-bullet-0"><span class="c6 c3">Sinus congestion and pressure</span></li><li class="c0 li-bullet-0"><span class="c6 c3">Temporary near-sightedness</span></li><li class="c0 li-bullet-0"><span class="c3 c6">Claustrophobia</span></li><li class="c0 li-bullet-0"><span class="c6 c3">Oxygen toxicity</span></li><li class="c0 li-bullet-0"><span class="c6 c3">Seizures (rare)</span></li></ul><p>Our team takes all precautions to minimize risks, and the potential side effects will be discussed with you prior to treatment.</p>`
					},
					{
						title: "How should patients prepare for treatment?",
						type: "faq",
						textHtml: `<ul class="c5 lst-kix_z4q2jreniv6f-0 start"><li class="c0 li-bullet-0"><span>Wear </span><span class="c3">loose-fitting cotton clothing</span><span class="c1">&nbsp;(avoid cosmetics, perfumes, hair sprays, deodorants, and jewelry).</span></li><li class="c0 li-bullet-0"><span>Avoid alcohol and carbonated drinks for at least </span><span class="c3">4 hours prior</span><span class="c1">&nbsp;to treatment.</span></li><li class="c0 li-bullet-0"><span class="c3">No smoking</span><span class="c1">&nbsp;during treatment and between sessions, as nicotine constricts blood vessels and can reduce HBOT’s effectiveness.</span></li><li class="c0 li-bullet-0"><span>Have a </span><span class="c3">light, nutritious meal</span><span class="c1">&nbsp;1-2 hours before treatment.</span></li><li class="c0 li-bullet-0"><span>If you have </span><span class="c3">diabetes</span><span class="c1">, your blood glucose levels will be checked before and after each treatment.</span></li></ul>`
					},
					{
						title: "How are patients referred for treatment?",
						type: "faq",
						textHtml: `<p>Patients can refer themselves or be referred by their physician. All patients undergo an evaluation by our physician, who will create a customized treatment protocol. To schedule an evaluation, you can call us at +44 020 3823 1212 or email info@numaoxygen.com.</p>`
					},
					{
						title: "Are hyperbaric oxygen therapy treatments covered by insurance?",
						type: "faq",
						textHtml: `<p>Insurance coverage for HBOT varies depending on your insurer. We recommend you discuss this with your insurance provider. All treatments are paid for upfront, and we can provide a receipt for reimbursement if covered by your insurer.</p>`
					},
					{
						title: "Do you provide wheelchair access?",
						type: "faq",
						textHtml: `<p> Yes, our facility is wheelchair accessible. However, some patients with limited mobility may find it challenging to enter the monoplace chambers. Please refer to our ‘What to Expect’ video for a visual demonstration of accessibility features and potential challenges.</p>`
					}
				]
			}
		},
		feedback: {
			screen: {
				title: "Feedback at NUMA"
			},
			block1: {
				textHtml: `<div><p class="c2"><span class="c1">Feedback at NUMA</span></p><p class="c2"><span class="c1">At NUMA, we highly value feedback as it helps us continuously improve the care, treatment, and services we offer. Whether you want to share a compliment, raise a concern, or submit a formal complaint, we are committed to listening and responding in a transparent and constructive manner. Rest assured, raising a concern or complaint will not affect your future care.</span></p><h3 class="c9" id="h.4pia5aigcjoc"><span class="c10">Ways to Leave Your Feedback:</span></h3><h4 class="c3" id="h.dru3btp7cb90"><span class="c4">Compliments</span></h4><p class="c2"><span class="c1">If you’d like to express appreciation for the care, treatment, or service you received, we would love to hear from you. Compliments can be shared verbally, in writing, by email, or over the phone. You can send your feedback to the Clinical Manager at info@numaoxygen.com, and we will ensure it’s passed along to the relevant individual.</span></p><h4 class="c3" id="h.ec6kof4vo3fa"><span class="c4">Concerns</span></h4><p class="c2"><span class="c1">If there’s an instance where you feel NUMA hasn’t met your expectations but you don’t wish to file a formal complaint, you can raise a concern with us. This can be done by speaking directly with any member of staff providing your care or with our clinic manager. If you’ve already left NUMA and want to raise a concern afterward, feel free to contact us via the methods below.</span></p><p class="c2"><span class="c1">You can also leave a Google review to share your experience at NUMA.</span></p><h4 class="c3" id="h.e9c4hoclubaw"><span class="c4">Complaints</span></h4><p class="c2"><span class="c1">If you need to make a formal complaint, we’ll ensure it’s handled confidentially and with sensitivity. Complaints can be made in writing or by email, and must be submitted within 12 months of the event or the time you became aware of the issue.</span></p><p class="c2"><span class="c1">How to Make a Complaint:</span></p><ul class="c6 lst-kix_dv9fyru37jqa-0 start"><li class="c0 li-bullet-0"><span class="c1">In Writing or by Email: Please submit your complaint as soon as possible after the event.</span></li><li class="c0 li-bullet-0"><span class="c1">Contact Details for Complaints:</span></li></ul><ul class="c6 lst-kix_dv9fyru37jqa-1 start"><li class="c2 c7 li-bullet-0"><span class="c1">Chloe Aylott, Clinical Manager<br> NUMA Ltd<br> 6 York Street<br> London, W1U 6QD<br> Email: info@numaoxygen.com<br> Phone: 020 8038 9280</span></li></ul><p class="c2"><span class="c1">When we receive your complaint, we will:</span></p><ol class="c6 lst-kix_23cca2gnbklu-0 start" start="1"><li class="c0 li-bullet-0"><span class="c1">Acknowledge Receipt: Within 3 working days, we will confirm receipt of your complaint and provide an expected date for a full response.</span></li><li class="c0 li-bullet-0"><span class="c1">Follow-up: Our Clinical Director or an appropriate team member will contact you by phone to discuss the issue further.</span></li><li class="c0 li-bullet-0"><span class="c1">Written Response: We will send a written response within 20 working days, unless there is an unexpected delay, in which case we will inform you.</span></li></ol><p class="c2"><span class="c1">If you’re making a complaint on behalf of someone else, please provide a completed consent form so we can share confidential details with the complainant.</span></p><h4 class="c3" id="h.3gzniabtogpd"><span class="c4">To Help Us Address Your Feedback:</span></h4><p class="c2"><span class="c1">When submitting feedback, it will help us resolve the matter more efficiently if you provide the following:</span></p><ul class="c6 lst-kix_7277pw9tx4mp-0 start"><li class="c0 li-bullet-0"><span class="c1">Reason for your feedback</span></li><li class="c0 li-bullet-0"><span class="c1">When and how the events occurred</span></li><li class="c0 li-bullet-0"><span class="c1">What actions you’ve already taken (if applicable)</span></li><li class="c0 li-bullet-0"><span class="c1">The outcome you are seeking</span></li></ul><hr><p class="c2 c8"><span class="c1"></span></p><p class="c2"><span class="c1">We appreciate you taking the time to share your thoughts and concerns with us. Your feedback helps us continue to provide the highest quality care to all of our patients. Thank you for trusting NUMA with your health and well-being.</span></p><p class="c2 c8"><span class="c1"></span></p></div>`
			}
		}
	}
}
