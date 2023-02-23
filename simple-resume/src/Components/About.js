import React, { Component, useState, useEffect} from "react";
import { render } from "react-dom";
import VisibilitySensor from "react-visibility-sensor";
import { AnimationWrapper } from 'react-hover-animation';
import Example from './State';

import "animate.css/animate.min.css";

import profpic from './img/img01.jpg';
import map from './img/icon01.png';
import flag from './img/icon02.png';
import school from './img/icon03.png';
import age from './img/icon04.png';
import linkedin from './img/icon06.png';
import rocket from './img/icon07.png';


import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function onChange(isVisible) {
	console.log('Element is now %s', isVisible ? 'visible' : 'hidden');
}

class About extends Component {

	render(){
		return(
			<div className="">
				<div className="about bg-262626 p-rl-30" id="about">
					<VisibilitySensor onChange={onChange}>
					<div className="d-flex flex-c-gap-30 p-t-30 p-b-30 w-1024 flex-flow-column-sp">
						<div className="">
							<img src={profpic} alt="" width="" height=""></img>
						</div>
						<div className="f-c-fff m-t-20-sp">
							<p className="f-s-24 f-w-700">About Me</p>
							<p className="p-t-10 line-height-28">I was born on March 22nd 1996 and now I am 26 years old. I am an honest, hardworking, and reliable worker. I can work well as a team player but did not limit me to work independently. I am responsible for every task and duty to produce the result as needed. I can also determine and make decisions to take direct actions based on current situations. I am willing to develop my knowledge and ability to higher standards. My motto is “hard works never disappoint” and “do my best.”</p>
							<div className="p-t-10">
								<div className="">
									<ul className="d-grid grid-col-2">
										<li className="d-flex flex-c-gap-10 a-i-center">
											<img src={map} alt="" width="" height="" className="img-auto"/>
											<p><span className="f-w-700">Location:</span> Cibinong, Bogor</p>
										</li>
										<li className="d-flex flex-c-gap-10 a-i-center">
											<img src={flag} alt="" width="" height="" className="img-auto"/>
												<p><span className="f-w-700">Nationality:</span> Indonesia</p>
										</li>
										<li className="d-flex flex-c-gap-10 a-i-center">
											<img src={school} alt="" width="" height="" className="img-auto"/>
											<p><span className="f-w-700">Study:</span> Bunda Mulia University</p>
										</li>
										<li className="d-flex flex-c-gap-10 a-i-center">
											<img src={age} alt="" width="" height="" className="img-auto"/>
											<p><span className="f-w-700">Age:</span> 26</p>
										</li>
									</ul>
								</div>
								<div className="p-t-30">
									<p className="f-s-24 f-w-700">Reach me on</p>
									<div className="d-flex flex-c-gap-10 a-i-center p-t-10">
										<img src={linkedin} alt="" width="" height="" width="" className="img-auto" />
										<AnimationWrapper>
											<p className="p-t-10 f-w-700">
												<a href="https://www.linkedin.com/in/eka-prayoga-winata/" target="_blank">Linked-In</a>
											</p>
										</AnimationWrapper>
									</div>
									</div>
									<div className="p-t-30">
										<p className="f-s-24 f-w-700">My Other Portfolio</p>
										<div className="d-flex flex-c-gap-10 a-i-center p-t-10">
											<img src={rocket} alt="" width="" height="" width="" className="img-auto" />
											<AnimationWrapper>
												<p className="p-t-10 f-w-700">
													<a href="https://yoga1967.github.io/pics-of-the-day/" target="_blank">NASA Astrophotography of The Day</a>
												</p>
											</AnimationWrapper>
										</div>
									</div>
							</div>
						</div>
						</div>
					</VisibilitySensor>
				</div>
				<div className="education bg-F5F5F5 p-tb-60 p-rl-30 font-color-262626 p-t-30-sp">
					<div class="d-flex flex-items-30 max-w-screen-lg margin-auto border-bottom flex-flow-column-sp">
						<div className="category" id="education">
							<p className="text-xl underline-FB923C d-inline">EDUCATION</p>
						</div>
						<div className="p-b-30 flex-w-70 flex-w-100-sp p-t-15-sp">
							<p className="text-xl f-w-700 font-color-444444">Bunda Mulia University</p>
							<p className="text-sm"><span className="f-w-700 italic font-color-5F5F5F">Ancol, Jakarta</span> • 2014 - 2018</p>

							<p className="text-xl f-w-700 font-color-444444 p-t-20">Mardi Waluya Senior High School</p>
							<p className="text-sm"><span className="f-w-700 italic font-color-5F5F5F">Cibinong, Bogor</span> • 2011 - 2014</p>
							<p className="text-xl f-w-700 font-color-444444 p-t-20">Mardi Waluya Junior High School</p>
							<p className="text-sm"><span className="f-w-700 italic font-color-5F5F5F">Cibinong, Bogor</span> • 2008 - 2011</p>
						</div>
					</div>
					<div class="d-flex flex-items-30 max-w-screen-lg margin-auto border-bottom m-t-30 flex-flow-column-sp">
						<div className="category" id="work">
							<p className="text-xl underline-FB923C d-inline">WORK</p>
						</div>
						<div className="p-b-30 flex-w-70 flex-w-100-sp p-t-15-sp">
							<p className="text-xl f-w-700 font-color-444444">PT. Transcosmos Indonesia</p>
							<p className="text-sm"><span className="f-w-700 italic font-color-5F5F5F">Jakarta</span> • Dec 2018 - June 2022</p>
							<div className="p-t-10">
								<p className="text-sm f-w-700 font-color-444444">Roles and Responsibilities</p>
								<ul className="bullet-before-stripe font-color-444444">
									<li className="text-sm text-indent">Create landing pages for clients using company-personalized CMS</li>
									<li className="text-sm text-indent">Maintain and Improves company websites and existing services</li>
									<li className="text-sm text-indent">Maintains and improves different websites using Static websites and company-personalized CMS</li>
									<li className="text-sm">Projects that I have completed:</li>
										<ul className="bullet-before-dot font-color-444444">
										<li className="text-sm">Meiji Co., Ltd. monthly projects in 2018 – 2019</li>
										<li className="text-sm">Mitsubishi Electric Renewal Website in 2018 – 2019</li>
										<li className="text-sm">Toyota FAQ Page in 2019</li>
										<li className="text-sm">Mitsubishi SPOT Projects in 2020</li>
										<li className="text-sm">Japan Tobacco Inc.(JT) new product pages in 2021</li>
										<li className="text-sm">Marimo Co., Ltd. house cleaning advice page in 2021</li>
										</ul>
								</ul>
							</div>
						</div>
					</div>
					<div class="d-flex flex-items-30 max-w-screen-lg margin-auto border-bottom m-t-30 flex-flow-column-sp">
						<div className="category">
							<p className="text-xl underline-FB923C d-inline">SKILLS</p>
						</div>
						<div className="p-b-30 flex-w-70 d-flex flex-flow-column-sp flex-column flex-w-100-sp p-t-15-sp">
							<div className="flex-w-100-sp p-b-30 border-bottom">
								<p className="text-xl f-w-700 t-center">Frontend Development</p>
								<div className="d-flex font-color-444444 flex-items-100 p-t-20">
									<div class="d-grid d-grid-template-col-auto">
										<div className="skills">
											<p className="text-sm t-center">HTML</p>
											<div className="bar-placeholder m-t-10">
												<div className="circular-progressbar">
													<VisibilitySensor>
														{({ isVisible }) => {
															const percentage = isVisible ? 85 : 0;
															return (
																<CircularProgressbar
																	value={percentage}
																	text={`${percentage}%`}
																/>
															);
														}}
													</VisibilitySensor>
												</div>
											</div>
										</div>
										<div className="skills">
											<p className="text-sm t-center">CSS</p>
											<div className="bar-placeholder m-t-10">
												<div className="circular-progressbar">
													<VisibilitySensor>
														{({ isVisible }) => {
															const percentage = isVisible ? 80 : 0;
															return (
																<CircularProgressbar
																	value={percentage}
																	text={`${percentage}%`}
																/>
															);
														}}
													</VisibilitySensor>
												</div>
											</div>
										</div>
										<div className="skills">
											<p className="text-sm t-center">Javascript</p>
											<div className="bar-placeholder m-t-10">
												<div className="circular-progressbar">
													<VisibilitySensor>
														{({ isVisible }) => {
															const percentage = isVisible ? 75 : 0;
															return (
																<CircularProgressbar
																	value={percentage}
																	text={`${percentage}%`}
																/>
															);
														}}
													</VisibilitySensor>
												</div>
											</div>
										</div>
										<div className="skills p-t-20">
											<p className="text-sm t-center">JQuery</p>
											<div className="bar-placeholder m-t-10">
												<div className="circular-progressbar">
													<VisibilitySensor>
														{({ isVisible }) => {
															const percentage = isVisible ? 75 : 0;
															return (
																<CircularProgressbar
																	value={percentage}
																	text={`${percentage}%`}
																/>
															);
														}}
													</VisibilitySensor>
												</div>
											</div>
										</div>
										<div className="skills p-t-20">
											<p className="text-sm t-center">React</p>
											<div className="bar-placeholder m-t-10">
												<div className="circular-progressbar">
													<VisibilitySensor>
														{({ isVisible }) => {
															const percentage = isVisible ? 35 : 0;
															return (
																<CircularProgressbar
																	value={percentage}
																	text={`${percentage}%`}
																/>
															);
														}}
													</VisibilitySensor>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="flex-w-100-sp p-t-15-sp m-t-30">
								<p className="text-xl f-w-700 t-center">Tools</p>
								<div className="d-flex font-color-444444 flex-items-100 p-t-20">
									<div class="d-grid d-grid-template-col-auto">
										<div className="skills">
											<p className="text-sm t-center">GIT</p>
											<div className="bar-placeholder m-t-10">
												<div className="circular-progressbar">
													<VisibilitySensor>
														{({ isVisible }) => {
															const percentage = isVisible ? 50 : 0;
															return (
																<CircularProgressbar
																	value={percentage}
																	text={`${percentage}%`}
																/>
															);
														}}
													</VisibilitySensor>
												</div>
											</div>
										</div>
										<div className="skills">
											<p className="text-sm t-center">Adobe Photoshop</p>
											<div className="bar-placeholder m-t-10">
												<div className="circular-progressbar">
													<VisibilitySensor>
														{({ isVisible }) => {
															const percentage = isVisible ? 80 : 0;
															return (
																<CircularProgressbar
																	value={percentage}
																	text={`${percentage}%`}
																/>
															);
														}}
													</VisibilitySensor>
												</div>
											</div>
										</div>
										<div className="skills">
											<p className="text-sm t-center">Figma</p>
											<div className="bar-placeholder m-t-10">
												<div className="circular-progressbar">
													<VisibilitySensor>
														{({ isVisible }) => {
															const percentage = isVisible ? 50 : 0;
															return (
																<CircularProgressbar
																	value={percentage}
																	text={`${percentage}%`}
																/>
															);
														}}
													</VisibilitySensor>
												</div>
											</div>
										</div>
										<div className="skills p-t-20">
											<p className="text-sm t-center">Adobe XD</p>
											<div className="bar-placeholder m-t-10">
												<div className="circular-progressbar">
													<VisibilitySensor>
														{({ isVisible }) => {
															const percentage = isVisible ? 75 : 0;
															return (
																<CircularProgressbar
																	value={percentage}
																	text={`${percentage}%`}
																/>
															);
														}}
													</VisibilitySensor>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default About;