import {
  Document,
  Page,
  View,
  Text,
  Image,
  StyleSheet,
} from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  image: {
    width: 100,
    marginLeft: 240,
    marginTop: 30,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 20,
  },
  header: {
    fontWeight: 700,
    marginLeft: 40,
    marginTop: 20,
    fontSize: 14,
  },
  content: {
    fontWeight: 700,
    marginLeft: 256,
    marginTop: 10,
    fontSize: 14,
  },
  table: {
    width: "91%",
    border: "1px solid #000",
    borderCollapse: "collapse",
    margin: "auto",
    marginTop: 16,
  },
  tableRow: {
    flexDirection: "row",
  },
  tableCellOne: {
    padding: 22,
    border: "1px solid #000",
    backgroundColor: "#045F5F",
    textAlign: "left",
  },
  tableCellTwo: {
    border: "1px solid #000",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#999999",
    padding: 0,
    borderTop: "none",
    borderLeft: "none",
    borderRight: "none",
    borderBottom: "none",
  },
  tableCellTwoContent: {
    padding: "4px",
    border: "1px solid #000",
    flex: "1",
    width: "100%",
    alignItems: "left",
  },
  tableCellThree: {
    border: "1px solid #000",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#ffffff",
    borderTop: "none",
    borderLeft: "none",
    borderRight: "none",
    borderBottom: "none",
  },
  tableCellThreeContent: {
    padding: "10px",
    border: "1px solid #000",
    flex: "1",
    width: "100%",
    alignItems: "left",
  },
  tableCellFour: {
    border: "1px solid #000",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#045F5F",
    borderTop: "none",
    borderLeft: "none",
    borderRight: "none",
    borderBottom: "none",
  },
  tableCellFourContent: {
    padding: "10px",
    border: "1px solid #000",
    flex: "1",
    width: "100%",
    alignItems: "left",
  },
  tableCellFive: {
    border: "1px solid #000",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#999999",
    borderTop: "none",
    borderLeft: "none",
    borderRight: "none",
    borderBottom: "none",
    textAlign: "right",
  },
  tableCellFiveContent: {
    padding: "10px",
    border: "1px solid #000",
    flex: "1",
    width: "100%",
    textAlign: "right",
  },
  tableCellSix: {
    border: "1px solid #000",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#ffffff",
    borderTop: "none",
    borderLeft: "none",
    borderRight: "none",
    borderBottom: "none",
    textAlign: "right",
  },
  tableCellSixContent: {
    padding: "10px",
    border: "1px solid #000",
    flex: "1",
    width: "100%",
    textAlign: "right",
  },
  tableCellSeven: {
    border: "1px solid #000",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#999999",
    borderTop: "none",
    borderLeft: "none",
    borderRight: "none",
    borderBottom: "none",
    textAlign: "right",
  },
  tableCellSevenContent: {
    padding: "10px",
    border: "1px solid #000",
    flex: "1",
    width: "100%",
    textAlign: "right",
  },
  tableCellEight: {
    border: "1px solid #000",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#ffffff",
    borderTop: "none",
    borderLeft: "none",
    borderRight: "none",
    borderBottom: "none",
    textAlign: "right",
  },
  tableCellEightContent: {
    padding: "10px",
    border: "1px solid #000",
    flex: "1",
    width: "100%",
    textAlign: "right",
  },

  tableCellNine: {
    padding: 10,
    border: "1px solid #000",
    backgroundColor: "#999999",
    textAlign: "center",
  },
  tableCellTen: {
    padding: 20,
    border: "1px solid #000",
    backgroundColor: "#045F5F",
    textAlign: "center",
    paddingRight: 7,
    paddingBottom: 7,
  },
  tableCellEleven: {
    border: "1px solid #000",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#999999",
    borderTop: "none",
    borderLeft: "none",
    borderRight: "none",
    borderBottom: "none",
    textAlign: "right",
  },
  tableCellElevenContentPartOne: {
    padding: "10px",
    border: "1px solid #000",
    flex: "1",
    width: "50%",
    textAlign: "right",
  },
  tableCellElevenContentPartTwo: {
    padding: "10px",
    border: "1px solid #000",
    flex: "1",
    width: "50%",
    textAlign: "right",
  },
  tableCellElevenContentPartThree: {
    padding: "10px",
    border: "1px solid #000",
    flex: "1",
    width: "100%",
    textAlign: "right",
    borderRight: "none",
  },
  tableCellElevenContentPartFour: {
    padding: "10px",
    border: "1px solid #000",
    flex: "1",
    width: "100%",
    textAlign: "right",
    borderLeft: "none",
  },
  tableCellTwelve: {
    border: "1px solid #000",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#ffffff",
    borderTop: "none",
    borderLeft: "none",
    borderRight: "none",
    borderBottom: "none",
    textAlign: "right",
  },
  tableCellTwelveContentPartOne: {
    padding: "10px",
    border: "1px solid #000",
    flex: "1",
    width: "50%",
    textAlign: "right",
  },
  tableCellTwelveContentPartTwo: {
    padding: "10px",
    border: "1px solid #000",
    flex: "1",
    width: "50%",
    textAlign: "right",
  },
  tableCellTwelveContentPartThree: {
    padding: "10px",
    border: "1px solid #000",
    flex: "1",
    width: "100%",
    textAlign: "right",
    borderRight: "none",
  },
  tableCellTwelveContentPartFour: {
    padding: "10px",
    border: "1px solid #000",
    flex: "1",
    width: "100%",
    textAlign: "right",
    borderLeft: "none",
  },

  tableCell13: {
    border: "1px solid #000",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#ffffff",
    borderTop: "none",
    borderLeft: "none",
    borderRight: "none",
    borderBottom: "none",
  },
  tableCell13Content: {
    padding: "10px",
    border: "1px solid #000",
    flex: "1",
    width: "100%",
    alignItems: "left",
  },
  tableCellBig: {
    border: "1px solid #000",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#ffffff",
    borderTop: "none",
    borderLeft: "none",
    borderRight: "none",
    borderBottom: "none",
  },
  tableCellBigContent: {
    padding: "10px",
    border: "1px solid #000",
    flex: "1",
    width: "100%",
    alignItems: "left",
  },
});

const PDFComponent = () => {
  return (
    <Document>
      <Page size="A4">
        <View>
          <Image
            style={styles.image}
            src="../src/assets/Images/PDF-Pages/Screenshot_1.png"
            alt=""
          />
          <Text style={[styles.header]}>
            SWIFT Outward Remittance - ن هناك صبي صغير يُدعى علي. كانت عائلة علي
            تروي القصص
          </Text>

          <Text style={styles.content}>Order Now</Text>

          <table style={styles.table}>
            <tr>
              <td style={styles.tableCellOne}>
                <Text
                  style={{
                    fontSize: "11px",
                    fontWeight: "600",
                    position: "absolute",
                    bottom: 5,
                    left: 368,
                    color: "#ffffff",
                  }}
                >
                  SWIFT Outward Remittance Form
                </Text>
              </td>

              <tr style={styles.tableCellTwo}>
                <td style={styles.tableCellTwoContent}>
                  <Text
                    style={{
                      fontSize: "11px",
                      fontWeight: 1000,
                      color: "#000",
                      marginTop: "20px",
                      marginBottom: "2px",
                      padding: 0,
                      marginRight: 6,
                      textAlign: "right",
                    }}
                  >
                    Date
                  </Text>
                </td>
                <td style={styles.tableCellTwoContent}>
                  <Text
                    style={{
                      fontSize: "11px",
                      fontWeight: 1000,
                      color: "#000",
                      marginTop: "20px",
                      marginBottom: "2px",
                      marginRight: 6,
                      padding: 0,
                      textAlign: "right",
                    }}
                  >
                    Client ID
                  </Text>
                </td>
                <td style={styles.tableCellTwoContent}>
                  <Text
                    style={{
                      fontSize: "11px",
                      fontWeight: 1000,
                      color: "#000",
                      marginTop: "20px",
                      padding: 0,
                      marginRight: 6,
                      marginBottom: "2px",
                      textAlign: "right",
                    }}
                  >
                    Branch
                  </Text>
                </td>
                <td style={styles.tableCellTwoContent}>
                  <Text
                    style={{
                      fontSize: "11px",
                      fontWeight: 1000,
                      color: "#000",
                      marginTop: "20px",
                      padding: 0,
                      marginRight: 6,
                      marginBottom: "2px",
                      textAlign: "right",
                    }}
                  >
                    Remittance
                  </Text>
                </td>
              </tr>

              <tr style={styles.tableCellThree}>
                <td style={styles.tableCellThreeContent}>
                  <Text
                    style={{
                      fontSize: "10px",
                      fontWeight: 500,
                      color: "#000",
                      padding: 0,
                      marginRight: 0,
                      textAlign: "right",
                    }}
                  >
                    2024-04-03
                  </Text>
                </td>
                <td style={styles.tableCellThreeContent}>
                  <Text
                    style={{
                      fontSize: "10px",
                      fontWeight: 500,
                      color: "#000",
                      padding: 0,
                      marginRight: 0,
                      textAlign: "right",
                    }}
                  >
                    6598741254
                  </Text>
                </td>
                <td style={styles.tableCellThreeContent}>
                  <Text
                    style={{
                      fontSize: "10px",
                      fontWeight: 500,
                      color: "#000",
                      padding: 0,
                      marginRight: 0,
                      textAlign: "right",
                    }}
                  >
                    -------
                  </Text>
                </td>
                <td style={styles.tableCellThreeContent}>
                  <Text
                    style={{
                      fontSize: "10px",
                      fontWeight: 500,
                      color: "#000",
                      padding: 0,
                      marginRight: 0,
                      textAlign: "right",
                    }}
                  >
                    p95604443
                  </Text>
                </td>
              </tr>

              <tr style={styles.tableCellFour}>
                <td style={styles.tableCellFourContent}>
                  <Text
                    style={{
                      fontSize: "11px",
                      fontWeight: 900,
                      color: "#ffffff",
                      marginLeft: "0px",
                      padding: 0,
                      marginRight: 0,
                      textAlign: "left",
                    }}
                  >
                    Applicant Details
                  </Text>
                </td>
                <td style={styles.tableCellFourContent}>
                  <Text
                    style={{
                      fontSize: "11px",
                      fontWeight: 900,
                      color: "#ffffff",
                      padding: 0,
                      marginRight: 0,
                      textAlign: "right",
                    }}
                  >
                    some iraki language
                  </Text>
                </td>
              </tr>

              <tr style={styles.tableCellFive}>
                <td style={styles.tableCellFiveContent}>
                  <Text
                    style={{
                      fontSize: "11px",
                      fontWeight: 900,
                      color: "#000",
                      padding: 0,
                      marginRight: 0,
                      textAlign: "right",
                    }}
                  >
                    Phone Number
                  </Text>
                </td>
                <td style={styles.tableCellFiveContent}>
                  <Text
                    style={{
                      fontSize: "11px",
                      fontWeight: 900,
                      color: "#000",
                      padding: 0,
                      marginRight: 0,
                      textAlign: "right",
                    }}
                  >
                    Applicant Client
                  </Text>
                </td>
              </tr>

              <tr style={styles.tableCellSix}>
                <td style={styles.tableCellSixContent}>
                  <Text
                    style={{
                      fontSize: "10px",
                      fontWeight: 500,
                      color: "#000",
                      padding: 0,
                      marginRight: 0,
                      textAlign: "right",
                    }}
                  >
                    +8801864754874
                  </Text>
                </td>
                <td style={styles.tableCellFiveContent}>
                  <Text
                    style={{
                      fontSize: "10px",
                      fontWeight: 500,
                      color: "#000",
                      padding: 0,
                      marginRight: 0,
                      textAlign: "right",
                    }}
                  >
                    Masudul Alam
                  </Text>
                </td>
              </tr>

              <tr style={styles.tableCellSeven}>
                <td style={styles.tableCellSevenContent}>
                  <Text
                    style={{
                      fontSize: "11px",
                      fontWeight: 900,
                      color: "#000",
                      padding: 0,
                      marginRight: 0,
                      textAlign: "right",
                    }}
                  >
                    Address
                  </Text>
                </td>
              </tr>

              <tr style={styles.tableCellEight}>
                <td style={styles.tableCellEightContent}>
                  <Text
                    style={{
                      fontSize: "10px",
                      fontWeight: 500,
                      color: "#000",
                      padding: 0,
                      marginRight: 0,
                      textAlign: "right",
                    }}
                  >
                    Avenue Garden City, Dhaka
                  </Text>
                </td>
              </tr>

              {/* IBAN-Number */}
              <td style={styles.tableCellNine}>
                <Text
                  style={{
                    fontSize: "10px",
                    fontWeight: "600",
                    textAlign: "center",
                    color: "#000",
                  }}
                >
                  IBAN Number /
                </Text>
                <Text
                  style={{
                    fontSize: "10px",
                    fontWeight: "600",
                    textAlign: "center",
                    color: "#000",
                    marginTop: "4px",
                  }}
                >
                  Debit Account Number / IBAN Number
                </Text>
              </td>

              <tr style={styles.tableCellEight}>
                <td style={styles.tableCellEightContent}>
                  <Text
                    style={{
                      fontSize: "10px",
                      fontWeight: 500,
                      color: "#000",
                      padding: 0,
                      marginRight: 0,
                      textAlign: "right",
                    }}
                  >
                    TR478547896321547896321458
                  </Text>
                </td>
              </tr>

              <td style={styles.tableCellTen}>
                <Text
                  style={{
                    fontSize: "13px",
                    fontWeight: "600",
                    textAlign: "right",
                    color: "#ffffff",
                  }}
                >
                  Remittance Details
                </Text>
              </td>

              <tr style={styles.tableCellEleven}>
                <td style={styles.tableCellElevenContentPartOne}>
                  <Text
                    style={{
                      fontSize: "11px",
                      fontWeight: 900,
                      color: "#000",
                      padding: 0,
                      marginRight: 0,
                      textAlign: "right",
                    }}
                  >
                    Amount
                  </Text>
                </td>
                <td style={styles.tableCellElevenContentPartTwo}>
                  <Text
                    style={{
                      fontSize: "11px",
                      fontWeight: 900,
                      color: "#000",
                      padding: 0,
                      marginRight: 0,
                      textAlign: "right",
                    }}
                  >
                    Currency
                  </Text>
                </td>
                <td style={styles.tableCellElevenContentPartThree}>
                  <Text
                    style={{
                      fontSize: "11px",
                      fontWeight: 900,
                      color: "#000",
                      padding: 0,
                      marginRight: 0,
                      textAlign: "right",
                    }}
                  ></Text>
                </td>
                <td style={styles.tableCellElevenContentPartFour}>
                  <Text
                    style={{
                      fontSize: "11px",
                      fontWeight: 900,
                      color: "#000",
                      padding: 0,
                      marginRight: 0,
                      textAlign: "right",
                    }}
                  >
                    Amount in writing
                  </Text>
                </td>
              </tr>

              <tr style={styles.tableCellTwelve}>
                <td style={styles.tableCellTwelveContentPartOne}>
                  <Text
                    style={{
                      fontSize: "10px",
                      fontWeight: 400,
                      color: "#000",
                      padding: 0,
                      marginRight: 0,
                      textAlign: "right",
                    }}
                  >
                    5612
                  </Text>
                </td>
                <td style={styles.tableCellTwelveContentPartTwo}>
                  <Text
                    style={{
                      fontSize: "9px",
                      fontWeight: 400,
                      color: "#000",
                      padding: 0,
                      marginRight: 0,
                      textAlign: "right",
                    }}
                  >
                    IQD
                  </Text>
                </td>
                <td style={styles.tableCellTwelveContentPartThree}>
                  <Text
                    style={{
                      fontSize: "9px",
                      fontWeight: 900,
                      color: "#000",
                      padding: 0,
                      marginRight: 0,
                      textAlign: "right",
                    }}
                  ></Text>
                </td>
                <td style={styles.tableCellTwelveContentPartFour}>
                  <Text
                    style={{
                      fontSize: "9px",
                      fontWeight: 400,
                      color: "#000",
                      padding: 0,
                      marginRight: 0,
                      textAlign: "right",
                    }}
                  >
                    Five Thousand
                  </Text>
                </td>
              </tr>

              <tr style={styles.tableCellEleven}>
                <td style={styles.tableCellElevenContentPartOne}>
                  <Text
                    style={{
                      fontSize: "11px",
                      fontWeight: 900,
                      color: "#000",
                      padding: 0,
                      marginRight: 0,
                      textAlign: "right",
                    }}
                  >
                    Comm..%
                  </Text>
                </td>
                <td style={styles.tableCellElevenContentPartTwo}>
                  <Text
                    style={{
                      fontSize: "11px",
                      fontWeight: 900,
                      color: "#000",
                      padding: 0,
                      marginRight: 0,
                      textAlign: "right",
                    }}
                  >
                    Comm. Amount
                  </Text>
                </td>
                <td style={styles.tableCellElevenContentPartThree}>
                  <Text
                    style={{
                      fontSize: "11px",
                      fontWeight: 900,
                      color: "#000",
                      padding: 0,
                      marginRight: 0,
                      textAlign: "right",
                    }}
                  ></Text>
                </td>
                <td style={styles.tableCellElevenContentPartFour}>
                  <Text
                    style={{
                      fontSize: "11px",
                      fontWeight: 900,
                      color: "#000",
                      padding: 0,
                      marginRight: 0,
                      textAlign: "right",
                    }}
                  >
                    Remittance Purpose
                  </Text>
                </td>
              </tr>

              <tr style={styles.tableCellTwelve}>
                <td style={styles.tableCellTwelveContentPartOne}>
                  <Text
                    style={{
                      fontSize: "10px",
                      fontWeight: 400,
                      color: "#000",
                      padding: 0,
                      marginRight: 0,
                      textAlign: "right",
                    }}
                  >
                    12%
                  </Text>
                </td>
                <td style={styles.tableCellTwelveContentPartTwo}>
                  <Text
                    style={{
                      fontSize: "9px",
                      fontWeight: 400,
                      color: "#000",
                      padding: 0,
                      marginRight: 0,
                      textAlign: "right",
                    }}
                  >
                    673.44
                  </Text>
                </td>
                <td style={styles.tableCellTwelveContentPartThree}>
                  <Text
                    style={{
                      fontSize: "9px",
                      fontWeight: 900,
                      color: "#000",
                      padding: 0,
                      marginRight: 0,
                      textAlign: "right",
                    }}
                  ></Text>
                </td>
                <td style={styles.tableCellTwelveContentPartFour}>
                  <Text
                    style={{
                      fontSize: "9px",
                      fontWeight: 400,
                      color: "#000",
                      padding: 0,
                      marginRight: 0,
                      textAlign: "right",
                    }}
                  >
                    Aidat Odemesi
                  </Text>
                </td>
              </tr>

              <tr style={styles.tableCellFour}>
                <td style={styles.tableCellFourContent}>
                  <Text
                    style={{
                      fontSize: "11px",
                      fontWeight: 900,
                      color: "#ffffff",
                      marginLeft: "0px",
                      padding: 0,
                      marginRight: 0,
                      textAlign: "left",
                    }}
                  >
                    Beneficiary Details
                  </Text>
                </td>
                <td style={styles.tableCellFourContent}>
                  <Text
                    style={{
                      fontSize: "11px",
                      fontWeight: 900,
                      color: "#ffffff",
                      padding: 0,
                      marginRight: 0,
                      textAlign: "right",
                    }}
                  >
                    some iraki language
                  </Text>
                </td>
              </tr>

              <tr style={styles.tableCell13}>
                <td style={styles.tableCell13Content}>
                  <Text
                    style={{
                      fontSize: "9px",
                      fontWeight: 400,
                      color: "#000",
                      marginLeft: "0px",
                      padding: 0,
                      marginRight: 0,
                      textAlign: "left",
                    }}
                  >
                    Beneficiary Account Number / IBAN Number
                  </Text>
                </td>
                <td style={styles.tableCell13Content}>
                  <Text
                    style={{
                      fontSize: "9px",
                      fontWeight: 400,
                      color: "#000",
                      padding: 0,
                      marginRight: 0,
                      textAlign: "right",
                    }}
                  >
                    IBAN Number /
                  </Text>
                </td>
              </tr>

              <tr style={styles.tableCellEight}>
                <td style={styles.tableCellEightContent}>
                  <Text
                    style={{
                      fontSize: "10px",
                      fontWeight: 500,
                      color: "#000",
                      padding: 0,
                      marginRight: 0,
                      textAlign: "right",
                    }}
                  >
                    TR478547896321547896321458
                  </Text>
                </td>
              </tr>
            </tr>
          </table>
        </View>
      </Page>

      <Page>
        <View>
          <table style={styles.table}>
            <tr>
              <tr style={styles.tableCellFive}>
                <td style={styles.tableCellFiveContent}>
                  <Text
                    style={{
                      fontSize: "11px",
                      fontWeight: 900,
                      color: "#000",
                      padding: 0,
                      marginRight: 0,
                      textAlign: "right",
                    }}
                  >
                    Address
                  </Text>
                </td>
                <td style={styles.tableCellFiveContent}>
                  <Text
                    style={{
                      fontSize: "11px",
                      fontWeight: 900,
                      color: "#000",
                      padding: 0,
                      marginRight: 0,
                      textAlign: "right",
                    }}
                  >
                    Beneficiary Name
                  </Text>
                </td>
              </tr>

              <tr style={styles.tableCellSix}>
                <td style={styles.tableCellSixContent}>
                  <Text
                    style={{
                      fontSize: "10px",
                      fontWeight: 500,
                      color: "#000",
                      padding: 0,
                      marginRight: 0,
                      textAlign: "right",
                    }}
                  >
                    Turkey
                  </Text>
                </td>
                <td style={styles.tableCellFiveContent}>
                  <Text
                    style={{
                      fontSize: "10px",
                      fontWeight: 500,
                      color: "#000",
                      padding: 0,
                      marginRight: 0,
                      textAlign: "right",
                    }}
                  >
                    Khandaker Abdullah
                  </Text>
                </td>
              </tr>

              <tr style={styles.tableCellFive}>
                <td style={styles.tableCellFiveContent}>
                  <Text
                    style={{
                      fontSize: "11px",
                      fontWeight: 900,
                      color: "#000",
                      padding: 0,
                      marginRight: 0,
                      textAlign: "right",
                    }}
                  >
                    SWIFT Code
                  </Text>
                </td>
                <td style={styles.tableCellFiveContent}>
                  <Text
                    style={{
                      fontSize: "11px",
                      fontWeight: 900,
                      color: "#000",
                      padding: 0,
                      marginRight: 0,
                      textAlign: "right",
                    }}
                  >
                    Bank Name
                  </Text>
                </td>
              </tr>

              <tr style={styles.tableCellSix}>
                <td style={styles.tableCellSixContent}>
                  <Text
                    style={{
                      fontSize: "10px",
                      fontWeight: 500,
                      color: "#000",
                      padding: 0,
                      marginRight: 0,
                      textAlign: "right",
                    }}
                  >
                    AKBKTRIS
                  </Text>
                </td>
                <td style={styles.tableCellFiveContent}>
                  <Text
                    style={{
                      fontSize: "10px",
                      fontWeight: 500,
                      color: "#000",
                      padding: 0,
                      marginRight: 0,
                      textAlign: "right",
                    }}
                  >
                    Akbank
                  </Text>
                </td>
              </tr>

              <tr style={styles.tableCellFive}>
                <td style={styles.tableCellFiveContent}>
                  <Text
                    style={{
                      fontSize: "11px",
                      fontWeight: 900,
                      color: "#000",
                      padding: 0,
                      marginRight: 0,
                      textAlign: "right",
                    }}
                  >
                    Correspondent Bank SWIFT Code
                  </Text>
                </td>
                <td style={styles.tableCellFiveContent}>
                  <Text
                    style={{
                      fontSize: "11px",
                      fontWeight: 900,
                      color: "#000",
                      padding: 0,
                      marginRight: 0,
                      textAlign: "right",
                    }}
                  >
                    Correspondent Bank Name
                  </Text>
                </td>
              </tr>

              <tr style={styles.tableCellSix}>
                <td style={styles.tableCellSixContent}>
                  <Text
                    style={{
                      fontSize: "10px",
                      fontWeight: 500,
                      color: "#000",
                      padding: 0,
                      marginRight: 0,
                      textAlign: "right",
                    }}
                  >
                    FIQBIQBA
                  </Text>
                </td>
                <td style={styles.tableCellFiveContent}>
                  <Text
                    style={{
                      fontSize: "10px",
                      fontWeight: 500,
                      color: "#000",
                      padding: 0,
                      marginRight: 0,
                      textAlign: "right",
                    }}
                  >
                    First Iraqi Bank
                  </Text>
                </td>
              </tr>

              <tr style={styles.tableCellFour}>
                <td style={styles.tableCellFourContent}>
                  <Text
                    style={{
                      fontSize: "11px",
                      fontWeight: 900,
                      color: "#ffffff",
                      marginLeft: "0px",
                      padding: 0,
                      marginRight: 0,
                      textAlign: "left",
                    }}
                  >
                    Disclaimer
                  </Text>
                </td>
                <td style={styles.tableCellFourContent}>
                  <Text
                    style={{
                      fontSize: "11px",
                      fontWeight: 900,
                      color: "#ffffff",
                      padding: 0,
                      marginRight: 0,
                      textAlign: "right",
                    }}
                  >
                    iraqi language
                  </Text>
                </td>
              </tr>

              <tr style={styles.tableCellBig}>
                <td style={styles.tableCellBigContent}>
                  <Text
                    style={{
                      fontSize: "11px",
                      fontWeight: 900,
                      color: "#000",
                      marginLeft: "0px",
                      padding: 0,
                      marginRight: 0,
                      textAlign: "left",
                    }}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellendus repudiandae omnis officiis animi quasi
                    recusandae velit sit id eligendi necessitatibus accusantium
                    nesciunt possimus nostrum mollitia, et at consequuntur
                    placeat? Ea, dolores fuga expedita minus voluptatibus
                    architecto eaque esse velit maiores cum officiis voluptates
                    veritatis. Voluptatibus voluptatem enim praesentium officiis
                    earum aspernatur. Ducimus, maiores reprehenderit. Corporis
                    nihil in ipsam? Ab, eaque numquam facilis exercitationem at
                    libero quisquam commodi illo, voluptate quos iusto quod
                    culpa repudiandae velit pariatur. Natus iusto accusamus
                    tempora animi ullam non ad vitae quasi magni, rem illo
                    voluptates reprehenderit repellendus debitis expedita minima
                    eos aliquam placeat odit eum.
                  </Text>
                </td>
                <td style={styles.tableCellFourContent}>
                  <Text
                    style={{
                      fontSize: "11px",
                      fontWeight: 900,
                      color: "#000",
                      padding: 0,
                      marginRight: 0,
                      textAlign: "right",
                    }}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptates, rerum dolore vel omnis aperiam impedit nulla
                    totam esse assumenda molestias odio consequatur. Sit nam
                    quis aut rerum vitae, harum dicta eaque optio impedit
                    veritatis debitis molestias beatae accusantium, id sapiente
                    ipsum ea repellendus unde fuga velit magni eum officia, enim
                    quam? Assumenda nulla veniam vel, dolor et atque numquam
                    temporibus consectetur aperiam accusamus tempore id beatae
                    aliquam cum commodi esse velit, facere itaque ut voluptates,
                    hic quidem earum asperiores consequatur! Doloribus
                    repellendus error nemo totam similique sit, quo dolore
                    ducimus dicta quia accusantium a excepturi sed dolor rerum
                    earum libero.
                  </Text>
                </td>
              </tr>

              <tr style={styles.tableCellFive}>
                <td style={styles.tableCellFiveContent}>
                  <Text
                    style={{
                      fontSize: "11px",
                      fontWeight: 900,
                      color: "#000",
                      padding: 0,
                      marginRight: 0,
                      textAlign: "right",
                    }}
                  >
                    Applicant Name
                  </Text>
                </td>
                <td style={styles.tableCellFiveContent}>
                  <Text
                    style={{
                      fontSize: "11px",
                      fontWeight: 900,
                      color: "#000",
                      padding: 0,
                      marginRight: 0,
                      textAlign: "right",
                    }}
                  >
                    Applicant Signature & Date
                  </Text>
                </td>
              </tr>

              <tr style={styles.tableCellSix}>
                <td style={styles.tableCellSixContent}>
                  <Text
                    style={{
                      fontSize: "10px",
                      fontWeight: 500,
                      color: "#000",
                      padding: 0,
                      marginRight: 0,
                      textAlign: "right",
                    }}
                  ></Text>
                </td>
                <td style={styles.tableCellFiveContent}>
                  <Text
                    style={{
                      fontSize: "10px",
                      fontWeight: 500,
                      color: "#000",
                      padding: 0,
                      marginRight: 0,
                      textAlign: "right",
                    }}
                  ></Text>
                </td>
              </tr>

              <tr style={styles.tableCellEleven}>
                <td style={styles.tableCellElevenContentPartOne}>
                  <Text
                    style={{
                      fontSize: "11px",
                      fontWeight: 900,
                      color: "#000",
                      padding: 0,
                      marginRight: 0,
                      textAlign: "right",
                    }}
                  >
                    Prepared By
                  </Text>
                </td>
                <td style={styles.tableCellElevenContentPartTwo}>
                  <Text
                    style={{
                      fontSize: "11px",
                      fontWeight: 900,
                      color: "#000",
                      padding: 0,
                      marginRight: 0,
                      textAlign: "right",
                    }}
                  >
                    Date
                  </Text>
                </td>
                <td style={styles.tableCellElevenContentPartThree}>
                  <Text
                    style={{
                      fontSize: "11px",
                      fontWeight: 900,
                      color: "#000",
                      padding: 0,
                      marginRight: 0,
                      textAlign: "right",
                    }}
                  ></Text>
                </td>
                <td style={styles.tableCellElevenContentPartFour}>
                  <Text
                    style={{
                      fontSize: "11px",
                      fontWeight: 900,
                      color: "#000",
                      padding: 0,
                      marginRight: 0,
                      textAlign: "right",
                    }}
                  >
                    Employee Signature
                  </Text>
                </td>
              </tr>

              <tr style={styles.tableCellTwelve}>
                <td style={styles.tableCellTwelveContentPartOne}>
                  <Text
                    style={{
                      fontSize: "10px",
                      fontWeight: 400,
                      color: "#000",
                      padding: 0,
                      marginRight: 0,
                      textAlign: "right",
                    }}
                  ></Text>
                </td>
                <td style={styles.tableCellTwelveContentPartTwo}>
                  <Text
                    style={{
                      fontSize: "9px",
                      fontWeight: 400,
                      color: "#000",
                      padding: 0,
                      marginRight: 0,
                      textAlign: "right",
                    }}
                  >
                    2024/04/08
                  </Text>
                </td>
                <td style={styles.tableCellTwelveContentPartThree}>
                  <Text
                    style={{
                      fontSize: "9px",
                      fontWeight: 900,
                      color: "#000",
                      padding: 0,
                      marginRight: 0,
                      textAlign: "right",
                    }}
                  ></Text>
                </td>
                <td style={styles.tableCellTwelveContentPartFour}>
                  <Text
                    style={{
                      fontSize: "9px",
                      fontWeight: 400,
                      color: "#000",
                      padding: 0,
                      marginRight: 0,
                      textAlign: "right",
                    }}
                  ></Text>
                </td>
              </tr>

              <tr style={styles.tableCellFour}>
                <td style={styles.tableCellFourContent}>
                  <Text
                    style={{
                      fontSize: "11px",
                      fontWeight: 900,
                      color: "#ffffff",
                      marginLeft: "0px",
                      padding: 0,
                      marginRight: 0,
                      textAlign: "left",
                    }}
                  >
                    Remittance Terms and Conditions
                  </Text>
                </td>
                <td style={styles.tableCellFourContent}>
                  <Text
                    style={{
                      fontSize: "11px",
                      fontWeight: 900,
                      color: "#ffffff",
                      padding: 0,
                      marginRight: 0,
                      textAlign: "right",
                    }}
                  >
                    iraqi language
                  </Text>
                </td>
              </tr>

              <tr style={styles.tableCellBig}>
                <td style={styles.tableCellBigContent}>
                  <Text
                    style={{
                      fontSize: "11px",
                      fontWeight: 900,
                      color: "#000",
                      marginLeft: "0px",
                      padding: 0,
                      marginRight: 0,
                      textAlign: "left",
                    }}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellendus repudiandae omnis officiis animi quasi
                    recusandae velit sit id eligendi necessitatibus accusantium
                    nesciunt possimus nostrum mollitia, et at consequuntur
                    placeat? Ea, dolores fuga expedita minus voluptatibus
                    architecto eaque esse velit maiores cum officiis voluptates
                    veritatis. Voluptatibus voluptatem enim praesentium officiis
                    earum aspernatur. Ducimus, maiores reprehenderit. Corporis
                    nihil in ipsam? Ab, eaque numquam facilis exercitationem at
                    libero quisquam commodi illo, voluptate quos iusto quod
                    culpa repudiandae velit pariatur.
                  </Text>
                </td>
                <td style={styles.tableCellFourContent}>
                  <Text
                    style={{
                      fontSize: "11px",
                      fontWeight: 900,
                      color: "#000",
                      padding: 0,
                      marginRight: 0,
                      textAlign: "right",
                    }}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptates, rerum dolore vel omnis aperiam impedit nulla
                    totam esse assumenda molestias odio consequatur. Sit nam
                    quis aut rerum vitae, harum dicta eaque optio impedit
                    veritatis debitis molestias beatae accusantium, id sapiente
                    ipsum ea repellendus unde fuga velit magni eum officia, enim
                    quam? Assumenda nulla veniam vel, dolor et atque numquam
                    temporibus consectetur aperiam accusamus tempore id beatae
                    aliquam cum commodi esse velit, facere itaque ut voluptates,
                    hic quidem earum asperiores consequatur! Doloribus
                    repellendus error nemo totam similique sit,
                  </Text>
                </td>
              </tr>
            </tr>
          </table>
        </View>
      </Page>
    </Document>
  );
};

export default PDFComponent;
