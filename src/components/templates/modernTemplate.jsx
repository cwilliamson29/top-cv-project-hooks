import React, { useRef } from 'react';
import './modernTemplate.css';
import { BiCurrentLocation } from 'react-icons/bi';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { useContext } from 'react';
import DataContext from '../../context/DataContext';
import PrintContext from '../../context/printContext';

export const ModernTemplate = React.forwardRef((props, ref) => {
	const { contact, summary, eduArray, certArray, skillsArray, workArray, descArray } = useContext(DataContext);
	const { abr, name, sumSize, loc, phone, email, color, edu1, edu2, edu3, edu4, cert1, cert2, cert3, skill1, skill2, work1, work2, work3 } = useContext(PrintContext);

	const abrStyle = {
		borderColor: color,
		fontSize: abr + 'px',
		fontColor: 'red',
	};

	return (
		<div className="printWidth mg-b" ref={ref}>
			<div className="resumeMargin"></div>

			{/*************LEFT COLUMN************/}
			<div className="leftColumn">
				<div className="abr" style={abrStyle}>
					{contact.fname[0]}
					{contact.lname[0]}
				</div>
				<div className="col-mar loc" style={{ borderColor: color }}>
					<div className="loc1" style={{ backgroundColor: color }}>
						<BiCurrentLocation size="1em" style={{ color: 'white' }} />
					</div>
					<div className="loc2" style={{ fontSize: loc + 'px' }}>
						{contact.loc}
					</div>
				</div>
				<div className="ph" style={{ borderColor: color }}>
					<div className="ph1" style={{ backgroundColor: color }}>
						<BsFillTelephoneFill size="1em" style={{ color: 'white' }} />
					</div>
					<div className="ph2" style={{ fontSize: phone + 'px' }}>
						{contact.phone}
					</div>
				</div>
				<div className="ph" style={{ borderColor: color }}>
					<div className="ph1" style={{ backgroundColor: color }}>
						<MdOutlineAlternateEmail size="1em" style={{ color: 'white' }} />
					</div>
					<div className="ph2" style={{ fontSize: email + 'px' }}>
						{contact.email}
					</div>
				</div>

				<div>
					<div className="education2" style={{ borderColor: color }}>
						<span>Education</span>
					</div>
					<div className="educ2">
						{eduArray.map((item, idx) => (
							<div key={item.id}>
								<div className={'study2'} style={{ fontSize: edu1 + 'px' }}>
									{item.study}
								</div>
								<div className={'major2'} style={{ fontSize: edu2 + 'px' }}>
									{item.major}
								</div>
								<div className={'school2'} style={{ fontSize: edu3 + 'px' }}>
									{item.school}
								</div>
								<div className="scYear" style={{ fontSize: edu4 + 'px' }}>
									{item.dateFrom} to {item.dateTo}
								</div>
							</div>
						))}
					</div>
				</div>
				<div>
					<div className="education2" style={{ borderColor: color }}>
						<span>Certifications</span>
					</div>
					<div className="educ">
						{certArray.map((item, idx) => (
							<div key={item.id}>
								<div className={'cert'} style={{ fontSize: cert1 + 'px' }}>
									{item.cert}
								</div>
								<div className="certCont">
									<span className={'source'} style={{ fontSize: cert2 + 'px' }}>
										{item.source}
									</span>
									|
									<span className={'cdate'} style={{ fontSize: cert3 + 'px' }}>
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
				<div className="nameDisplay" style={{ fontSize: name + 'px', backgroundColor: color }}>
					{contact.fname} {contact.lname}
				</div>

				<div>
					<div className="summary" style={{ borderColor: color }}>
						Summmary
					</div>
				</div>
				<div className="summaryDesc" style={{ fontSize: sumSize + 'px' }}>
					{summary}
				</div>
				<div className="skillDisplay" style={{ borderColor: color }}>
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
									<div className="ski" style={{ fontSize: skill1 + 'px', lineHeight: h }}>
										<li>{item.skill}</li>
									</div>
									<div className="skii" style={{ fontSize: skill2 + 'px', lineHeight: h }}>
										{item.exp}
									</div>
								</div>
							);
						} else {
							return (
								<div key={idx} className="skillsInside skR">
									<div className="ski" style={{ fontSize: skill1 + 'px', lineHeight: h }}>
										<li>{item.skill}</li>
									</div>
									<div className="skii" style={{ fontSize: skill2 + 'px', lineHeight: h }}>
										{item.exp}
									</div>
								</div>
							);
						}
					})}
				</div>

				<div className="skillDisplay" style={{ borderColor: color }}>
					Work History
				</div>
				<div className="work">
					{workArray.map((item, i) => (
						<div key={item.id}>
							<div className="fb" style={{ fontSize: work1 + 'px' }}>
								{item.company}
							</div>
							<h5 className="fi" style={{ fontSize: work2 + 'px' }}>
								{item.title} | {item.dateFrom} to {item.dateTo}
							</h5>
							<div>
								<ul>
									{descArray.map((item2, i) => {
										if (item2.parentId === item.id) {
											return (
												<div key={item2.id} className="wii" style={{ fontSize: work3 + 'px' }}>
													<li>{item2.text}</li>
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
		</div>
	);
});
