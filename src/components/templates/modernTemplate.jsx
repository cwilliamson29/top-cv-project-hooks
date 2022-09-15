import React, { useRef } from 'react';
import './modernTemplate.css';
import { BiCurrentLocation } from 'react-icons/bi';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { useContext } from 'react';
import DataContext from '../../context/DataContext';

export const ModernTemplate = React.forwardRef((props, ref) => {
	const { contact, summary, eduArray, certArray, skillsArray, workArray, descArray } = useContext(DataContext);
	const abr = {
		borderColor: props.color,
		fontSize: props.abr + 'px',
		fontColor: 'red',
	};

	return (
		<div className="printWidth mg-b" ref={ref}>
			<div className="resumeMargin"></div>

			{/*************LEFT COLUMN************/}
			<div className="leftColumn">
				<div className="abr" style={abr}>
					{contact.fname[0]}
					{contact.lname[0]}
				</div>
				<div className="col-mar loc" style={{ borderColor: props.color }}>
					<div className="loc1" style={{ backgroundColor: props.color }}>
						<BiCurrentLocation size="1em" style={{ color: 'white' }} />
					</div>
					<div className="loc2" style={{ fontSize: props.loc + 'px' }}>
						{contact.loc}
					</div>
				</div>
				<div className="ph" style={{ borderColor: props.color }}>
					<div className="ph1" style={{ backgroundColor: props.color }}>
						<BsFillTelephoneFill size="1em" style={{ color: 'white' }} />
					</div>
					<div className="ph2" style={{ fontSize: props.phone + 'px' }}>
						{contact.phone}
					</div>
				</div>
				<div className="ph" style={{ borderColor: props.color }}>
					<div className="ph1" style={{ backgroundColor: props.color }}>
						<MdOutlineAlternateEmail size="1em" style={{ color: 'white' }} />
					</div>
					<div className="ph2" style={{ fontSize: props.email + 'px' }}>
						{contact.email}
					</div>
				</div>

				<div>
					<div className="education" style={{ borderColor: props.color }}>
						<span>Education</span>
					</div>
					<div className="educ">
						{eduArray.map((item, idx) => (
							<div key={item.id}>
								<div className={'study'} style={{ fontSize: props.edu1 + 'px' }}>
									{item.study}
								</div>
								<div className={'major'} style={{ fontSize: props.edu2 + 'px' }}>
									{item.major}
								</div>
								<div className={'school'} style={{ fontSize: props.edu3 + 'px' }}>
									{item.school}
								</div>
								<div className="scYear" style={{ fontSize: props.edu3 + 'px' }}>
									{item.dateFrom} to {item.dateTo}
								</div>
							</div>
						))}
					</div>
				</div>
				<div>
					<div className="education" style={{ borderColor: props.color }}>
						<span>Certifications</span>
					</div>
					<div className="educ">
						{certArray.map((item, idx) => (
							<div key={item.id}>
								<div className={'cert'} style={{ fontSize: props.cert1 + 'px' }}>
									{item.cert}
								</div>
								<div className="certCont">
									<span className={'source'} style={{ fontSize: props.cert2 + 'px' }}>
										{item.source}
									</span>
									|
									<span className={'cdate'} style={{ fontSize: props.cert3 + 'px' }}>
										{item.date}
									</span>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			{/*************RIGHT COLUMN************/}

			<div className="rightColumn">
				<div className="nameDisplay" style={{ fontSize: props.name + 'px', backgroundColor: props.color }}>
					{props.info.fname} {props.info.lname}
				</div>

				<div>
					<div className="summary" style={{ borderColor: props.color }}>
						Summmary
					</div>
				</div>
				<div className="summaryDesc" style={{ fontSize: props.sumSize + 'px' }}>
					{summary}
				</div>
				<div className="skillDisplay" style={{ borderColor: props.color }}>
					Skills
				</div>
				<div className="skills">
					{skillsArray.map((item, idx) => {
						let f = idx + 1;
						let g = parseInt(props.skill1) + 8;
						let h = g + 'px';
						if (f % 2 === 0) {
							return (
								<div key={idx} className="skillsInside">
									<div className="ski" style={{ fontSize: props.skill1 + 'px', lineHeight: h }}>
										<li>{item.skill}</li>
									</div>
									<div className="skii" style={{ fontSize: props.skill2 + 'px', lineHeight: h }}>
										{item.exp}
									</div>
								</div>
							);
						} else {
							return (
								<div key={idx} className="skillsInside skR">
									<div className="ski" style={{ fontSize: props.skill1 + 'px', lineHeight: h }}>
										<li>{item.skill}</li>
									</div>
									<div className="skii" style={{ fontSize: props.skill2 + 'px', lineHeight: h }}>
										{item.exp}
									</div>
								</div>
							);
						}
					})}
				</div>

				<div className="skillDisplay" style={{ borderColor: props.color }}>
					Work History
				</div>
				<div className="work">
					{workArray.map((item, i) => (
						<div key={item.id}>
							<div className="fb" style={{ fontSize: props.work1 + 'px' }}>
								{item.company}
							</div>
							<h5 className="fi" style={{ fontSize: props.work2 + 'px' }}>
								{item.title} | {item.dateFrom} to {item.dateTo}
							</h5>
							<div>
								<ul>
									{descArray.map((item2, i) => {
										if (item2.parentId == item.id) {
											return (
												<div key={item2.id} className="wii" style={{ fontSize: props.work3 + 'px' }}>
													<li>{item2.item}</li>
												</div>
											);
										}
									})}
								</ul>
							</div>
						</div>
					))}
				</div>
			</div>
			<button onClick={() => console.log(contact)}>console contact</button>
		</div>
	);
});
