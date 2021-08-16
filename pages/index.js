import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect,useState } from 'react'

import Form from '../components/form';
import formddata from '../'

export default function Home() {

  const [responseBody, updateResponseBody] = useState(null);



  fetch('/api/hello').then(response=>response.json().then(body=>updateResponseBody(body)));

  function FormDisplay(){
    if(responseBody===null){
      return <div></div>;
    } else {
      return <Form formData={responseBody}/>
    }
  }


  return (
    <div className={styles.container}>

        <title>DEMO</title>
        <FormDisplay/>

    </div>
  )
}
