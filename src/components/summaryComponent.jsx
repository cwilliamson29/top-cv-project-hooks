import React from 'react';
import { Row, Col } from 'reactstrap';
import { FaTrashAlt } from 'react-icons/fa';
import { useContext } from 'react';
import DataContext from '../context/DataContext';

function Summary() {
	const { summary, setSummary, handleSummaryDelete } = useContext(DataContext);
	const onInput = (event) => {
		if (event.target.scrollHeight > 38) {
			event.target.style.height = '5px';
			event.target.style.height = event.target.scrollHeight - 3 + 'px';
		}
	};

	return (
		<div className="pb-5 col-12">
			<Row className="mb-3 justify-content-center">
				<Col md={8}></Col>
				<Col md={1} className="text-end">
					<span onClick={() => handleSummaryDelete()}>
						<FaTrashAlt size="1.5em" style={{ color: 'red' }} />
					</span>
				</Col>
			</Row>
			<Row className="justify-content-center">
				<div className="col-md-9 pb-3">
					<textarea row={1} className="summaryD" onChange={(e) => setSummary(e.target.value)} onInput={onInput} value={summary} name="summary" placeholder="Organized and motivated employee eager to..." />
				</div>
			</Row>
		</div>
	);
}

export default Summary;
