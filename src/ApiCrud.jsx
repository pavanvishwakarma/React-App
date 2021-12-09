

import React, { useEffect, useState } from "react";
import { Container, Row } from 'react-bootstrap';
import '../src/assets/css/style.css';
const ApiCrud = () => {

    const [data, setData] = useState([])
    const [dataMsg, setDataMsg] = useState("")

    const [msgStatus, setMsgStatus] = useState()
    const [msg, setMsg] = useState()

    const [sid, setSid] = useState(null)
    const [sname, setSname] = useState("")
    const [sage, setSage] = useState("")
    const [scity, setScity] = useState("")

    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [city, setCity] = useState("")



    useEffect(() => {
            getList();
    }, [])

    const getList = () => {
        fetch("http://localhost/php-rest-api/api-fetch-all.php")
            .then((result) => {
                result.json()
                    .then((resp) => {
                        setData(resp)
                        setDataMsg(resp.message)
                        setSname("")
                        setSage("")
                        setScity("")
                        setName("")
                        setAge("")
                        setCity("")
                    })
            })
    }



    const insertData = (e) => {
        e.preventDefault();
        let sname = name;
        let sage = age;
        let scity = city;
        let item = { sname, sage, scity }

        if (!sage.includes("-")) {
            fetch(`http://localhost/php-rest-api/api-insert.php`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(item)
            }).then((result) => {
                result.json()
                    .then((resp) => {
                        getList()
                        setMsg(resp.message)
                        setMsgStatus(resp.status)

                    })
            })
        }


    }
    const selectData = (id) => {
        let modalId = document.getElementById('modal');
        modalId.classList.add("show");
        setSid(data[id].id)
        setSname(data[id].student_name)
        setSage(data[id].age)
        setScity(data[id].city)

    }


    const editData = (e, id) => {
        e.preventDefault();

        let item = { sid, sname, sage, scity }
        let modalId = document.getElementById('modal');
        modalId.classList.add("show");

        fetch(`http://localhost/php-rest-api/api-update.php`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        }).then((result) => {
            result.json()
                .then((resp) => {
                    // console.log(resp.message);
                    getList()
                    closePop()
                    setMsg(resp.message)
                    setMsgStatus(resp.status)
                })
        })
    }

    const deleteData = (id) => {

        let sid = id;
        let item = { sid }
        fetch(`http://localhost/php-rest-api/api-delete.php`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        }).then((result) => {
            result.json()
                .then((resp) => {
                    // console.log(resp);
                    getList()
                    setMsg(resp.message)
                    setMsgStatus(resp.status)
                })
        })
    }

    const closePop = () => {
        let modalId = document.getElementById('modal');
        modalId.classList.remove("show");
    }

    const searchInput = (e) => {
        let search = e.target.value
        // let item = { search }

        fetch(`http://localhost/php-rest-api/api-search.php?search=${search}`, {
        }).then((result) => {
            result.json()
                .then((resp) => {
                    // console.log(resp);
                    setData(resp)
                    setDataMsg(resp.message)
                    setMsgStatus(resp.status)
                })
        })
    }


    return (

        <>

            <div className="main-banner wow fadeIn" data-wow-duration="1s" data-wow-delay="0.5s">
                <Container>
                    <Row>
                        <table id="main" border="0" cellSpacing="0">
                            <tr>
                                <td id="header">
                                    <h1>REACT API CRUD</h1>

                                    <div id="search-bar">
                                        <label>Search :</label>
                                        <input type="text" id="search" autoComplete="off" onChange={searchInput} />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td id="table-form">
                                    <form id="addForm">
                                        Name : <input type="text" name="sname" id="sname" onChange={(e) => setName(e.target.value)} value={name} />
                                        Age : <input type="number" name="sage" min="1" max="100" id="sage" onChange={(e) => setAge(e.target.value)} value={age} />
                                        City : <input type="text" name="scity" id="scity" onChange={(e) => setCity(e.target.value)} value={city} />
                                        {/* <input type="submit" id="save-button" value="" /> */}
                                        <button id="save-button" onClick={(e) => insertData(e)}>Save</button>
                                    </form>
                                </td>
                            </tr>
                            <tr>

                                <td id="table-data">
                                    <table width="100%" cellPadding="10px" >
                                        <tr>
                                            <th width="40px">Id</th>
                                            <th>Name</th>
                                            <th width="50px">Age</th>
                                            <th width="150px">City</th>
                                            <th width="60px">Edit</th>
                                            <th width="70px">Delete</th>
                                        </tr>

                                        <tbody id="load-table">
                                            {
                                                data.length > 0 ?
                                                    data.map((item, i) =>
                                                        <tr key={i} >
                                                            {/* <td>{item.id}</td> */}
                                                            <td>{item.id}</td>
                                                            <td>{item.student_name}</td>
                                                            <td>{item.age}</td>
                                                            <td>{item.city}</td>
                                                            <td><button className="edit-btn" onClick={() => selectData(i)}>Edit</button></td>
                                                            <td><button className="delete-btn" onClick={() => deleteData(item.id)}>Delete</button></td>
                                                        </tr>
                                                    ) :

                                                    <tr className="text-center">
                                                        <td colspan='6' ><h4>{dataMsg}</h4></td>
                                                    </tr>

                                            }
                                        </tbody>

                                    </table>
                                    {
                                        msgStatus === true ?
                                            <div id="success-message" class="messages">{msg}</div>
                                            : msgStatus === false ?
                                                <div id="error-message" class="messages">{msg}</div>
                                                : null
                                    }

                                    {/* <div id="error-message" class="messages"></div>
                                    <div id="success-message" class="messages"></div> */}

                                    <div id="modal" className="">
                                        <div id="modal-form">
                                            <h2>Edit Form</h2>
                                            <form id="edit-form">
                                                <table cellPadding="10px" width="100%">
                                                    <tr>
                                                        <td width="90px">Name</td>
                                                        <td><input type="text" name="sname" id="edit-name" value={sname} onChange={(e) => setSname(e.target.value)} />
                                                            <input type="hidden" name="sid" id="edit-id" value={sid} />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>Age</td>
                                                        <td><input type="number" name="sage" id="edit-age" value={sage} onChange={(e) => setSage(e.target.value)} /></td>
                                                    </tr>
                                                    <tr>
                                                        <td>City</td>
                                                        <td><input type="text" name="scity" id="edit-city" value={scity} onChange={(e) => setScity(e.target.value)} /></td>
                                                    </tr>
                                                    <tr>
                                                        <td></td>
                                                        <td>
                                                            <button id="edit-submit" onClick={(e) => editData(e, sid)}>Update</button>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </form>
                                            <div id="close-btn" onClick={closePop}>X</div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </Row>
                </Container>


            </div>
        </>
    )
}

export default ApiCrud