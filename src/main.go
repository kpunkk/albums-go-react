package main

import (
	"database/sql"
	"fmt"
	"log"

	"github.com/gin-gonic/gin"
)

var db *sql.DB

func main() {
	err := initDB()
	if err != nil {
		log.Fatal(err)
	}

	defer db.Close()

	fmt.Println("Connected")

	router := gin.Default()

	router.GET("/albums", getAlbums)
	router.GET("/albums/:id", getAlbumByID)
	router.POST("/albums", postAlbum)

	router.Run("localhost:8080")
}
