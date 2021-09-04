import React from 'react'
import {View,Text,ImageBackground,Image,TouchableOpacity,ScrollView } from "react-native"
import styles from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCog, faToolbox, faFan, faKey,faLock, faUnlockAlt, faMusic, faChevronRight, faClock, faThermometerHalf, faCar, faBolt, faMapMarkerAlt, faShoppingBag, faWrench, faExclamationTriangle} from '@fortawesome/free-solid-svg-icons';
import items from './items';

const Menu = () => {
    return (
        <View style={styles.menuItems}>
        {items.map(item => (
            
        <TouchableOpacity key={item.id}>
            <View style={styles.menuRow}>
                    <FontAwesomeIcon style={styles.icon} icon={ item.icon } size={24} />
                    <View style={styles.menuTextBox} >
                        <Text style={styles.menuText}  >
                            {item.title}
                        </Text>
                        {item.subTitle && (
                            <Text style={styles.subtitle}>{item.subTitle}</Text>
                        )}
                    </View>
                    <FontAwesomeIcon style={styles.arrowicon} icon={ faChevronRight } size={24} />
                    
            </View>
        </TouchableOpacity>

        ))}
        
        
       
        </View>
    )
}

export default Menu
