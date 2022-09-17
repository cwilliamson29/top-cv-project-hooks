import React from 'react';
import { Label } from 'reactstrap';
import { FaTrashAlt } from 'react-icons/fa';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { useContext } from 'react';
import DataContext from '../context/DataContext';

export default function WorkDesc({ id }) {
	const { updateWorkDescArray, handleDescDelete, addWorkDesc, descArray } = useContext(DataContext);
	const onInput = (event) => {
		if (event.target.scrollHeight > 38) {
			event.target.style.height = '5px';
			event.target.style.height = event.target.scrollHeight - 3 + 'px';
		}
	};

	return (
		<div>
			<div className="col-md-12  pt-4 pb-1">
				<Label className="text-dark text-center">
					Add Job Description{' '}
					<span
						onClick={() => {
							addWorkDesc(id);
						}}>
						<BsFillPlusCircleFill size="1.5em" style={{ color: 'green' }} />
					</span>
				</Label>
			</div>
			<div className="col-md-10 pb-3">
				<ul className="row">
					{descArray.map((item, i) => {
						if (item.parentId == id) {
							return (
								<div key={item.id} className="row">
									<div className="col-md-1 pb-3">
										<span onClick={() => handleDescDelete(item.id)}>
											<FaTrashAlt size="1.5em" style={{ color: 'red' }} />
										</span>
									</div>
									<div className="col-md-10 pb-3">
										<li>
											<textarea className="summaryD" onChange={(e) => updateWorkDescArray(item.id, e.target.value)} onInput={onInput} value={item.text} id="desc" placeholder="Job Description" />
										</li>
									</div>
								</div>
							);
						}
					})}
				</ul>
			</div>
		</div>
	);
}
