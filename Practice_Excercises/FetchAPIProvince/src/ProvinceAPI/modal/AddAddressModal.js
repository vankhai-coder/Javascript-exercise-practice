import { useContext, useEffect, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { fetchToAddAddress } from '../fetchFunction/fetch';
import axios from 'axios';
import Context from '../store/Context';
import { toast } from 'react-toastify';


function AddAddressModal({ studentId }) {
    // modal part : 
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // get state : 
    const { dispatch } = useContext(Context)
    // add address part : 
    // list : 
    const [listProvince, setListProvince] = useState('')
    const [listDistrict, setListDistrict] = useState('')
    const [listCommute, setListCommute] = useState('')
    // data : 
    const [provinceData, setProvinceData] = useState('')
    const [districtData, setDistrictData] = useState('')
    const [commuteData, setCommuteData] = useState('')
    const [streetNumber, setStreetNumber] = useState('')

    // always get list province : 
    useEffect(
        () => {
            const fetchToGetListProvince = async () => {
                try {
                    const response = await axios.get(`https://esgoo.net/api-tinhthanh/1/0.htm`)
                    // nếu xóa student thành công :
                    console.log('fetch du lieu tinh success : ', response.data);
                    setListProvince(response.data)

                } catch (error) {
                    console.log('error when try to delete student : ', error);
                    return false
                }
            }
            fetchToGetListProvince()
        }
        , []
    )
    // get list district when has list province : 
    useEffect(
        () => {
            console.log('trong useEffect khi lay list huyen : ', provinceData);
            const fetchToGetListDistrict = async (provinceId) => {
                try {
                    const response = await axios.get(`https://esgoo.net/api-tinhthanh/2/${provinceId}.htm`)
                    // nếu get list district thành công :
                    console.log('fetch du lieu huyen success : ', response.data);
                    setListDistrict(response.data)
                } catch (error) {
                    console.log('error when try to delete student : ', error);
                    return false
                }
            }
            if (provinceData) {
                fetchToGetListDistrict(JSON.parse(provinceData).id)
            }
        }
        , [provinceData]
    )
    // get list commute when has list district : 
    useEffect(
        () => {
            console.log('trong useEffect khi lay list xa : ', commuteData);
            const fetchToGetListCommute = async (districtId) => {
                try {
                    const response = await axios.get(`https://esgoo.net/api-tinhthanh/3/${districtId}.htm`)
                    // nếu get list district thành công :
                    console.log('fetch du lieu xa success : ', response.data);
                    setListCommute(response.data)
                } catch (error) {
                    console.log('error when try to delete student : ', error);
                    return false
                }
            }
            if (districtData) {
                fetchToGetListCommute(JSON.parse(districtData).id)
            }
        }
        , [districtData]
    )
    // function to get new address : 
    const getNewAddress = () => {
        return {
            studentID: studentId,
            province: JSON.parse(provinceData).full_name_en,
            district: JSON.parse(districtData).full_name_en,
            commute: JSON.parse(commuteData).full_name_en,
            streetNumber,
            id: `ADD_${Date.now()}`,
        }
    }
    // add toast : 
    const notifyAdd = () => {
        toast("Add address successfully !", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            type: "success"
        });
    };
    return (
        <>
            <Button variant="success" className='ms-2' onClick={handleShow}>
                Add
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add address</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={(e) => {
                        e.preventDefault()

                        fetchToAddAddress(getNewAddress(), dispatch)

                        setProvinceData('')
                        setDistrictData('')
                        setCommuteData('')

                        setListDistrict('')
                        setListCommute('')
                        setStreetNumber('')

                        notifyAdd()

                        handleClose()
                    }}>
                        <Row className='justify-content-center'>
                            <Form.Group as={Col} className='mb-4' md='10'>
                                <Form.Label className='mb-1 fw-bold'>Choose Province</Form.Label>
                                <Form.Select
                                    value={provinceData}
                                    onChange={(e) => {
                                        setProvinceData(e.target.value)
                                        setDistrictData('')
                                        setCommuteData('')
                                        setListDistrict('')
                                        setListCommute('')
                                    }}
                                    required >
                                    <option value={''} disabled>Select Province...</option>
                                    {listProvince && listProvince.data.map((p, index) => (
                                        <option key={index} value={JSON.stringify(p)} >{p.name}</option>
                                    ))}
                                </Form.Select>
                            </Form.Group>
                            <Form.Group as={Col} className='mb-4' md='10'>
                                <Form.Label className='mb-1 fw-bold'>Choose District</Form.Label>
                                <Form.Select
                                    value={districtData}
                                    onChange={(e) => {
                                        setDistrictData(e.target.value)
                                        setCommuteData('')
                                    }}
                                    required >
                                    <option value="" disabled>Select District...</option>
                                    {listDistrict && listDistrict.data.map(((d, index) => (
                                        <option key={index} value={JSON.stringify(d)}>{d.name}</option>
                                    )))}
                                </Form.Select>
                            </Form.Group>
                            <Form.Group as={Col} className='mb-4' md='10'>
                                <Form.Label className='mb-1 fw-bold'>Choose Commute</Form.Label>
                                <Form.Select
                                    value={commuteData}
                                    onChange={(e) => {
                                        setCommuteData(e.target.value)
                                    }}
                                    required >
                                    <option value="" disabled>Select Commute...</option>
                                    {listCommute && listCommute.data.map((c, index) => (
                                        <option key={index} value={JSON.stringify(c)}>{c.name}</option>
                                    ))}
                                </Form.Select>
                            </Form.Group>
                            <Form.Group as={Col} className='mb-4' md='10'>
                                <Form.Label className='mb-1 fw-bold'>Street Number</Form.Label>
                                <Form.Control
                                    placeholder='Ex : 12 Nguyen Van Linh'
                                    required
                                    value={streetNumber}
                                    onChange={(e) => {
                                        setStreetNumber(e.target.value)
                                    }}
                                />
                            </Form.Group>
                        </Row>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="success" type='submit'>
                                Add
                            </Button>
                        </Modal.Footer>
                    </Form>
                </Modal.Body>

            </Modal>
        </>
    );
}

export default AddAddressModal;