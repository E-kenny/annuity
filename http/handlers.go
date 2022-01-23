package http

import (
	"fmt"
	"html/template"
	"net/http"
	"os"

	"github.com/joho/godotenv"
)

func App() {
	// load .env file
	err := godotenv.Load(".env")
	if err != nil {
		fmt.Println(fmt.Errorf("error occur %s", err))
	}
	http.HandleFunc("/benefit", benefit)
	http.HandleFunc("/premium", premium)
	fs := http.FileServer(http.Dir("static"))
	http.Handle("/static/", http.StripPrefix("/static", fs))
	http.ListenAndServe(  os.Getenv("PORT"), nil)
	
}

func benefit(w http.ResponseWriter, r *http.Request) {
	if r.Method == "GET" {

		t, err := template.ParseFiles("benefit.html")
		if err != nil {
			fmt.Println(fmt.Errorf("%w", err))
		}
		// standard output to print merged data
		err = t.Execute(w, nil)
		if err != nil {
			fmt.Println(fmt.Errorf("%w", err))
		}
	} else if r.Method == "POST" {
		fmt.Println("Hi Result")
	}

}



func premium(w http.ResponseWriter, r *http.Request) {
	if r.Method == "GET" {

		t, err := template.ParseFiles("premium.html")
		if err != nil {
			fmt.Println(fmt.Errorf("%w", err))
		}
		// standard output to print merged data
		err = t.Execute(w, nil)
		if err != nil {
			fmt.Println(fmt.Errorf("%w", err))
		}
	} else if r.Method == "POST" {
		fmt.Println("Hi Result")
	}

}