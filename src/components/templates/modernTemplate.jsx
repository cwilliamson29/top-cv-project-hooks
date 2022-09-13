import React, { useRef } from 'react';
import './modernTemplate.css';
import { BiCurrentLocation } from 'react-icons/bi';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdOutlineAlternateEmail } from 'react-icons/md';

export const ModernTemplate = React.forwardRef((props, ref) => {
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
					{props.info.fname[0]}
					{props.info.lname[0]}
				</div>
				<div className="col-mar loc" style={{ borderColor: props.color }}>
					<div className="loc1" style={{ backgroundColor: props.color }}>
						<BiCurrentLocation size="1em" style={{ color: 'white' }} />
					</div>
					<div class="loc2" style={{ fontSize: props.loc + 'px' }}>
						{props.info.loc}
					</div>
				</div>
				<div className="ph" style={{ borderColor: props.color }}>
					<div className="ph1" style={{ backgroundColor: props.color }}>
						<BsFillTelephoneFill size="1em" style={{ color: 'white' }} />
					</div>
					<div class="ph2" style={{ fontSize: props.phone + 'px' }}>
						{props.info.phone}
					</div>
				</div>
				<div className="ph" style={{ borderColor: props.color }}>
					<div className="ph1" style={{ backgroundColor: props.color }}>
						<MdOutlineAlternateEmail size="1em" style={{ color: 'white' }} />
					</div>
					<div class="ph2" style={{ fontSize: props.email + 'px' }}>
						{props.info.email}
					</div>
				</div>

				<div>
					<div className="education" style={{ borderColor: props.color }}>
						<span>Education</span>
					</div>
					<div className="educ">
						{props.educ.map((item, idx) => (
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
					{props.summary}
				</div>
			</div>
		</div>
	);
});
