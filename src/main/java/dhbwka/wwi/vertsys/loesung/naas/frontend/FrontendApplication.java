/* 
 * Copyright © 2020 Dennis Schulmeister-Zimolong
 * 
 * E-Mail: dhbw@windows3.de
 * Webseite: https://www.wpvs.de/
 * 
 * Dieser Quellcode ist lizenziert unter einer
 * Creative Commons Namensnennung 4.0 International Lizenz.
 *
 * Danke für die Vorlage :D
 */
package dhbwka.wwi.vertsys.loesung.naas.frontend;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Hauptklasse der Anwendung.
 */
@SpringBootApplication
public class FrontendApplication {

    private static Logger logger = LoggerFactory.getLogger(FrontendApplication.class);
    
    public static void main(String[] args) {
        SpringApplication.run(FrontendApplication.class, args);
        
        logger.info("");
        logger.info("");
        logger.info("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        logger.info(">>> Frontend-Server der Web-Anwendung <<<");
        logger.info(">>> http://localhost:1234/            <<<");
        logger.info("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        logger.info("");
        logger.info("");
    }

}
