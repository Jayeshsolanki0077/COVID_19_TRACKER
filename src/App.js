import React from 'react';

import Charts from './components/Charts/Charts';
import Cards from './components/Cards/Cards';
import CountryPicker from './components/CountryPicker/CountryPicker';

import styles from './App.module.css';

import {fetchedData} from './Apis';
import corona from './images/image.png';

class App extends React.Component {
    state= {data: {} , country: '' , 
            }

    async componentDidMount()
    {
        const fetchData = await fetchedData();
        this.setState({data:fetchData});
    }
    handleCountryChange = async (country) =>
    {
        const fetchingData =    await fetchedData(country);
        this.setState ({data : fetchingData , country:country});
    }
    render() 
    {
        const {data,country} = this.state;  //object destructuring 
        return (
                <div className={styles.container}>
                    <img className={styles.image} src = {corona} alt="coronaimage"/>
                    <Cards data={data}/>
                    
                    <CountryPicker handleCountryChange={this.handleCountryChange} />
                    <Charts data={data} country={country}/>
                    
                </div>
        );
    }
}

export default App;