import styles from "./CohortDetails.module.css";

function CohortDetails({cohort}){

    return(

        <div className={styles.card}>

            <h2
            style={{
                color:
                cohort.status==="Ongoing"
                ?"green"
                :"blue"
            }}
            >

                {cohort.title}

            </h2>

            <p>

                <strong>Status</strong><br/>
                {cohort.status}

            </p>

            <p>

                <strong>Start Date</strong><br/>
                {cohort.startDate}

            </p>

            <p>

                <strong>End Date</strong><br/>
                {cohort.endDate}

            </p>

            <p>

                <strong>Mentor</strong><br/>
                {cohort.mentor}

            </p>

        </div>

    );

}

export default CohortDetails;