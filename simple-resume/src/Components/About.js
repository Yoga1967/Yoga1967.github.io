import React, { Component } from "react";
import profpic from './img/img01.jpg';
import map from './img/icon01.png';
import flag from './img/icon02.png';
import school from './img/icon03.png';
import age from './img/icon04.png';
import linkedin from './img/icon06.png';

class About extends Component{
	render(){
		return(
			<div className="">
				<div className="about bg-262626 p-rl-30" id="about">
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
										<p className="p-t-10"><a href="https://www.linkedin.com/in/eka-prayoga-winata/" target="_blank">Linked-In</a></p>
									</div>
								</div>
							</div>
						</div>
					</div>
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
								<ul className="bullet-before font-color-444444">
									<li className="text-sm">Create landing pages for clients using company-personalized CMS</li>
									<li className="text-sm">Maintain and Improves company websites and existing services</li>
									<li className="text-sm">Maintains and improves different websites using Static websites and company-personalized CMS</li>
								</ul>
							</div>
						</div>
					</div>
					<div class="d-flex flex-items-30 max-w-screen-lg margin-auto border-bottom m-t-30 flex-flow-column-sp">
						<div className="category">
							<p className="text-xl underline-FB923C d-inline">SKILLS</p>
						</div>
						<div className="p-b-30 flex-w-70 d-flex flex-items-50 flex-flow-column-sp flex-w-100-sp p-t-15-sp">
							<div className="flex-w-100-sp">
								<p className="ml-2 text-xl f-w-700 t-center">Frontend Development</p>
								<div className="d-flex font-color-444444 flex-items-100 p-t-20">
									<div class="d-flex flex-column">
										<p className="ml-2 text-sm">HTML</p>
										<div className="bar-placeholder">
											<div className="bar">
												<div className="bar-filled fill-100">
												</div>
											</div>
										</div>
										<p className="ml-2 p-t-20 text-sm">CSS</p>
										<div className="bar-placeholder">
											<div className="bar">
												<div className="bar-filled fill-95">
												</div>
											</div>
										</div>
										<p className="ml-2 p-t-20 text-sm">Javascript</p>
										<div className="bar-placeholder">
											<div className="bar">
												<div className="bar-filled fill-75">
												</div>
											</div>
										</div>
										<p className="ml-2 p-t-20 text-sm">JQuery</p>
										<div className="bar-placeholder">
											<div className="bar">
												<div className="bar-filled fill-75">
												</div>
											</div>
										</div>
										<p className="ml-2 p-t-20 text-sm">React</p>
										<div className="bar-placeholder">
											<div className="bar">
												<div className="bar-filled fill-45">
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="flex-w-100-sp p-t-15-sp">
								<p className="ml-2 text-xl f-w-700 t-center">Tools</p>
								<div className="d-flex font-color-444444 flex-items-100 p-t-20">
									<div class="d-flex flex-column">
										<p className="ml-2 text-sm">GIT</p>
										<div className="bar-placeholder">
											<div className="bar">
												<div className="bar-filled fill-50">
												</div>
											</div>
										</div>
										<p className="ml-2 p-t-20 text-sm">Adobe Photoshop</p>
										<div className="bar-placeholder">
											<div className="bar">
												<div className="bar-filled fill-80">
												</div>
											</div>
										</div>
										<p className="ml-2 p-t-20 text-sm">Figma</p>
										<div className="bar-placeholder">
											<div className="bar">
												<div className="bar-filled fill-50">
												</div>
											</div>
										</div>
										<p className="ml-2 p-t-20 text-sm">Adobe XD</p>
										<div className="bar-placeholder">
											<div className="bar">
												<div className="bar-filled fill-75">
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