package http

import (
	"fmt"
	"html/template"
	"net/http"
)

func App() {
	http.HandleFunc("/benefit", benefit)
	http.HandleFunc("/premium", premium)
	fs := http.FileServer(http.Dir("static"))
	http.Handle("/static/", http.StripPrefix("/static", fs))
	http.ListenAndServe(":3000", nil)
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