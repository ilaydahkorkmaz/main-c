import React from "react";

const Line = ({ name, title }) => {
    return (
        <div className="line" style={styles.lineContainer}>
            <p style={styles.nameText}>{name}</p>
            <p style={styles.titleText}>{title}</p>
        </div>
    );
};

const styles = {
    lineContainer: {
        display: 'flex',
        flexDirection: 'column', // Dikey hizalama
        alignItems: 'flex-start', // Sol hizalama
        margin: '10px 0', // Üst ve alt kenarlarda boşluk
        padding: '10px',
        border: '1px solid #ccc', // Kenar çizgisi
        borderRadius: '5px', // Kenarları yuvarlak
        backgroundColor: '#f9f9f9', // Arka plan rengi
    },
    nameText: {
        fontWeight: 'bold', // Kalın yazı
        fontSize: '1.2em', // Yazı boyutu
        color: '#333', // Yazı rengi
    },
    titleText: {
        fontStyle: 'italic', // İtalik yazı
        color: '#666', // Yazı rengi
    },
};

export default Line;
