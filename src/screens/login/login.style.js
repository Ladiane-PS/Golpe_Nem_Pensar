// export para quem importa o button fazer uso desse styles 
import { COLORS, FONT_SIZE } from "../../constants/theme.js";

export const styles= {
    container: {
        backgroundColor: COLORS.black,
        flex: 1,
        padding: 50,
        justifyContent: "space-between"
    },
    containerLogo:{
        alignItems: "center"


    },
    logo: {
        width: 150,           // Largura do logo (mesma proporção que o botão)
        height: 70,           // Altura do logo
        borderRadius: 30,      // Mesma borda arredondada do botão
        justifyContent: "center",
        alignItems: "center",
        resizeMode: "cover",   // Para ajustar a imagem sem distorcer
    },
    containerInput: {
        marginBottom: 40
    },
    input: {
        backgroundColor: COLORS.white,
        padding: 10,
        borderRadius: 30
    },
    footer: {
        alignItems: "center",
        justifyContent: "center",
        color: COLORS.white, 
        flexDirection: "row"

    },
    footerLink:{
        color: COLORS.blue
    }
    


}
