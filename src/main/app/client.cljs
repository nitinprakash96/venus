(ns app.client
  (:require
   [com.fulcrologic.fulcro.application :as app]
   [com.fulcrologic.fulcro.algorithms.merge :as merge]
   [com.fulcrologic.fulcro.components :as comp :refer [defsc]]
   [com.fulcrologic.fulcro.dom :as dom :refer [button div label h3 ul]]
   [com.fulcrologic.fulcro.mutations :as m :refer [defmutation]]))

(defonce APP (app/fulcro-app))


(defsc Car [this {:car/keys [id model] :as props}]
  {:query [:car/id :car/model]
   :ident :car/id
   :initial-state {:car/id :param/id
                   :car/model :param/model}}
  (div "Model: " model))


(def ui-car (comp/factory Car {:keyfn :car/id}))


(defmutation make-older [{:person/keys [id]}]
  (action [{:keys [state]}]
          (swap! state update-in [:person/id id :person/age] inc)))


(defsc Person [this {:person/keys [id name age cars] :as props}]
  {:query [:person/id :person/name :person/age {:person/cars (comp/get-query Car)}]
   :ident :person/id
   :initial-state {:person/id :param/id
                   :person/name :param/name
                   :person/age 25
                   :person/cars [{:id 40 :model "sypder"}
                                 {:id 41 :model "phantom"}
                                 {:id 42 :model "fiesta"}]}}
  (let [onClick (comp/get-state this :onClick)]
    (div :.ui.segment
         (div :.ui.form
              (div :.field
                   (label {:onClick onClick} "Name: ") name)
              (div :.field
                   (label "Age: ") age)
              (button {:onClick #(comp/transact! this
                                                 [(make-older {:person/id id})])}
                      "Make older")
              (h3 {} "Cars")
              (ul {} (map ui-car cars))))))


(def ui-person (comp/factory Person {:keyfn :person/id}))


(defsc PersonList [this {:person-list/keys [people] :as props}]
  {:query [{:person-list/people (comp/get-query Person)}]
   :ident (fn [_ _] [:component/id ::person-list])
   :initial-state {:person-list/people [{:id 1 :name "Nitin"}
                                        {:id 2 :name "Brandon"}]}}
  (div
   (h3 "people")
   (map ui-person people)))


(def ui-person-list (comp/factory PersonList))


(defsc Sample [this {:root/keys [people]}]
  {:query [{:root/people (comp/get-query PersonList)}]
   :initial-state {:root/people {}}}
  (div
   (when people
     (ui-person-list people))))


(defn ^:export init
  []
  (app/mount! APP Sample "app")
  (js/console.log "Loaded"))


(comment
  (app/current-state APP)

  ;; (make-older {:a 1})
  (comp/transact! APP [(make-older {:person/id 1})])

  (merge/merge-component! APP Person {:person/id 1 :person/age 20})
  (comp/get-initial-state Sample)
  )
